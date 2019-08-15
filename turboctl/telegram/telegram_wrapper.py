from ..data import (Types, PARAMETERS, ParameterAccess, ParameterResponse, 
                    ParameterError, ControlBits, StatusBits)    

from .telegram import Telegram


class TelegramWrapper(Telegram):
        
    READABLE_PROPERTIES = Telegram.READABLE_PROPERTIES + ['parameter_type', 
                                                          'parameter_size', 
                                                          'parameter_unit',
                                                          'parameter_indexed',
                                                          'parameter_mode',
                                                          ]
    WRITABLE_PROPERTIES = Telegram.WRITABLE_PROPERTIES + ['parameter_mode']
    
    parameters = PARAMETERS
    enum = None
    
    def __init__(self, *args, **kwargs):
        self._parameter_number_is_set = False
        super().__init__(*args, **kwargs)
        self._parameter_number_is_set = True
        
    def _set_kwargs(self, **kwargs):
        try:
            self.parameter_number = kwargs['parameter_number']
            kwargs.pop('parameter_number')
        except KeyError:
            pass

        super()._set_kwargs(**kwargs)
    
    @Telegram.parameter_number.setter        
    def parameter_number(self, value):
        if self._parameter_number_is_set:
            raise RuntimeError(
                'parameter_number cannot be set after initialization')
        Telegram.parameter_number.fset(self, value)
    
    @property
    def _parameter(self):
        try:
            return self.parameters[self.parameter_number]
        except KeyError:
            return None
        
    @property
    def parameter_type(self):
        if not self._parameter:
            return Types.UINT
        return self._parameter.type
    
    @property
    def parameter_size(self):
        if not self._parameter:
            return 0
        return self._parameter.size
    
    @property
    def parameter_unit(self):
        if not self._parameter:
            return ''
        return self._parameter.unit
    
    @property
    def parameter_indexed(self):
        if not self._parameter:
            return False
        return bool(self._parameter.indices)
        
    @property
    def parameter_value(self):
        return self.get_parameter_value(self.parameter_type)
    
    @parameter_value.setter
    def parameter_value(self, value):             
        try:
             typed_value = Types.to_type(value, self.parameter_type)
        except TypeError as e:
            raise TypeError(
                    f"The type of *value* (now {type(value)}) should match "
                    f"the type of the parameter "
                    f"({self.parameter_type.description})"
                    ) from e
        Telegram.parameter_value.fset(self, typed_value)
        
    @property        
    def parameter_mode(self):
        raise NotImplementedError('This is an abstract function left '
                                  'to be defined in subclasses.')
        
    @parameter_mode.setter
    def parameter_mode(self):
        raise NotImplementedError('This is an abstract function left '
                                  'to be defined in subclasses.')
    
    def get_control_or_status_set(self):
        bits = super().control_bits
        return {self.enum(i) for i, bit in enumerate(bits) if bit == '1'}
    
    def set_control_or_status_set(self, set_):
        indices = [i.value for i in set_]        
        bits = ''.join(['1' if i in indices else '0' for i in range(16)])
        self.control_bits = bits
        
    def add_control_or_status_set(self, set_):
        new_set = self._get_control_or_status_set | set_
        indices = [i.value for i in new_set]        
        bits = ''.join(['1' if i in indices else '0' for i in range(16)])
        self.control_bits = bits
                            
        
class Query(TelegramWrapper):
    
    WRITABLE_PROPERTIES = (TelegramWrapper.WRITABLE_PROPERTIES 
                           + ['control_set'])
    READABLE_PROPERTIES = (TelegramWrapper.READABLE_PROPERTIES 
                           + ['control_set'])                    
    enum = ControlBits
    
    @property
    def parameter_mode(self):
        code = self.parameter_access_type
        try:
            mode_ = ParameterAccess(code)
        except ValueError:
            return 'invalid'
            
        if mode_ in ParameterAccess.read_modes():
            return 'read'
        
        if mode_ in ParameterAccess.write_modes():
            return 'write'
        
        return 'none'
    
    @parameter_mode.setter
    def parameter_mode(self, value):
        if value == 'none':
            self.parameter_access_type = ParameterAccess.NONE.value
            return
        
        if value == 'invalid':
            self.parameter_access_type = ParameterAccess.invalid_code()
            return
           
        if self.parameter_indexed:
            modes_by_index = ParameterAccess.indexed_modes()
        else: 
            modes_by_index = ParameterAccess.unindexed_modes()
            
        if self.parameter_size == 16:
            modes_by_size = ParameterAccess.sixteen_bit_modes()
        elif self.parameter_size == 32:
            modes_by_size = ParameterAccess.thirty_two_bit_modes()
        elif self.parameter_size == 0:
            raise ValueError(
                f'self.parameter_mode cannot be set because '
                'self.parameter_number (self.parameter_number) is invalid')
        else:
            raise RuntimeError(
                f'self.parameter_size should be 0, 16 or 32, not '
                f'{self.parameter_size}')
                        
        if value == 'read':
            modes_by_access = ParameterAccess.read_modes()
        elif value == 'write':
            modes_by_access = ParameterAccess.write_modes()
        else:
            if not isinstance(value, str):
                raise TypeError(f'*value* should be a str, not {type(value)}')
            
            raise ValueError(
                f"*value* should be 'read', 'write', 'none' ot 'invalid', "
                f"not {value}")
            
        mode_set = modes_by_access & modes_by_index & modes_by_size
        
        if len(mode_set) != 1:
            raise RuntimeError(
                    f'len(mode_set) should be 1, not {len(mode_set)}')
        
        mode = mode_set.pop()
        self.parameter_access_type = mode.value
        
    def get_control_set(self):
        return super().get_control_or_status_set()
    
    def set_control_set(self, value):
        super().set_control_or_status_set(value)
        
    def add_control_set(self, value):
        super().add_control_or_status_set(value)

class Reply(TelegramWrapper):
                
    WRITABLE_PROPERTIES = (TelegramWrapper.WRITABLE_PROPERTIES 
                           + ['error_code', 'status_set'])
    READABLE_PROPERTIES = (TelegramWrapper.READABLE_PROPERTIES 
                           + ['error_code', 'error_message', 'status_set'])     
    enum = StatusBits       
    
    @property
    def error_message(self):
        if self.parameter_mode != 'error':
            return ''
        
        try:
            return ParameterError(self.error_code).description
        except ValueError:
            return f'invalid error code: {self.error_code}'
        
    @property
    def error_code(self):
        return self.get_parameter_value(Types.UINT)
        
    @error_code.setter
    def error_code(self, value):
        
        if not Types.is_type(value, Types.UINT):
            raise TypeError(f'*value* ({value}) should be an unsigned integer')
        
        # Use the telegram setter, so that *value* will not be 
        # converted into the type of the parameter.
        Telegram.parameter_value.fset(self, value)
    
    @property
    def parameter_mode(self):
        code = self.parameter_access_type
        try:
            mode_ = ParameterResponse(code)
        except ValueError:
            return 'invalid'
        
        if mode_ is ParameterResponse.NONE:
            return 'none'
                
        if mode_ is ParameterResponse.ERROR:
            return 'error'
        
        if mode_ is ParameterResponse.NO_WRITE:
            return 'no write'
        
        return 'response'
    
    @parameter_mode.setter
    def parameter_mode(self, value):
        if value == 'none':
            self.parameter_access_type = ParameterResponse.NONE.value
            return
        
        if value == 'invalid':
            self.parameter_access_type = ParameterResponse.invalid_code()
            return
        
        if value == 'error':
            self.parameter_access_type = ParameterResponse.ERROR.value
            return
        
        if value == 'no write':
            self.parameter_access_type = ParameterResponse.NO_WRITE.value
            return
           
        if value != 'response':
            raise ValueError(
                    f"*value* should be 'none', 'error', 'no write' or "
                    f"'response', not {value}")    
        
        if self.parameter_indexed:
            modes_by_index = ParameterResponse.indexed_modes()
        else: 
            modes_by_index = ParameterResponse.unindexed_modes()
            
        if self.parameter_size == 16:
            modes_by_size = ParameterResponse.sixteen_bit_modes()
        elif self.parameter_size == 32:
            modes_by_size = ParameterResponse.thirty_two_bit_modes()
        elif self.parameter_size == 0:
            raise ValueError(
                f'self.parameter_mode cannot be set because '
                'self.parameter_number (self.parameter_number) is invalid')
        else:
            raise RuntimeError(
                f'self.parameter_size should be 0, 16 or 32, not '
                f'{self.parameter_size}')
                            
        mode_set = modes_by_index & modes_by_size
        
        if len(mode_set) != 1:
            raise RuntimeError(
                    f'len(mode_set) should be 1, not {len(mode_set)}')
        
        mode = mode_set.pop()
        self.parameter_access_type = mode.value
        
    def get_status_set(self):
        return super().get_control_or_status_set()
    
    def set_status_set(self, value):
        super().set_control_or_status_set(value)
        
    def add_status_set(self, value):
        super().add_control_or_status_set(value)
