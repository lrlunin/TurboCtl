Search.setIndex({docnames:["errata","index","installation","modules","modules/index","modules/telegram/api","modules/telegram/codes","modules/telegram/datatypes","modules/telegram/index","modules/telegram/parser","modules/telegram/telegram","modules/ui/advanced_tui","modules/ui/command_line_ui","modules/ui/control_interface","modules/ui/index","modules/ui/queuefile","modules/ui/status_format","modules/ui/table","modules/ui/widgets","modules/virtualpump/hardware_component","modules/virtualpump/index","modules/virtualpump/parameter_component","modules/virtualpump/virtualconnection","modules/virtualpump/virtualpump","usage"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":2,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["errata.rst","index.rst","installation.rst","modules.rst","modules/index.rst","modules/telegram/api.rst","modules/telegram/codes.rst","modules/telegram/datatypes.rst","modules/telegram/index.rst","modules/telegram/parser.rst","modules/telegram/telegram.rst","modules/ui/advanced_tui.rst","modules/ui/command_line_ui.rst","modules/ui/control_interface.rst","modules/ui/index.rst","modules/ui/queuefile.rst","modules/ui/status_format.rst","modules/ui/table.rst","modules/ui/widgets.rst","modules/virtualpump/hardware_component.rst","modules/virtualpump/index.rst","modules/virtualpump/parameter_component.rst","modules/virtualpump/virtualconnection.rst","modules/virtualpump/virtualpump.rst","usage.rst"],objects:{"turboctl.telegram":{api:[5,0,0,"-"],codes:[6,0,0,"-"],datatypes:[7,0,0,"-"],parser:[9,0,0,"-"],telegram:[10,0,0,"-"]},"turboctl.telegram.api":{read_parameter:[5,1,1,""],send:[5,1,1,""],status:[5,1,1,""],write_parameter:[5,1,1,""]},"turboctl.telegram.codes":{AccessError:[6,2,1,""],CannotChangeError:[6,2,1,""],ControlBits:[6,3,1,""],CustomInt:[6,3,1,""],FlagBits:[6,3,1,""],MinMaxError:[6,2,1,""],OtherError:[6,2,1,""],ParameterAccess:[6,3,1,""],ParameterCode:[6,3,1,""],ParameterError:[6,3,1,""],ParameterException:[6,2,1,""],ParameterExceptionMeta:[6,3,1,""],ParameterIndexError:[6,2,1,""],ParameterResponse:[6,3,1,""],SavingError:[6,2,1,""],StatusBits:[6,3,1,""],WrongNumError:[6,2,1,""],get_parameter_code:[6,1,1,""],get_parameter_mode:[6,1,1,""]},"turboctl.telegram.codes.CustomInt":{__new__:[6,4,1,""]},"turboctl.telegram.codes.ParameterException":{member:[6,4,1,""]},"turboctl.telegram.codes.ParameterExceptionMeta":{member:[6,4,1,""]},"turboctl.telegram.datatypes":{BYTESIZE:[7,5,1,""],Bin:[7,3,1,""],Data:[7,3,1,""],Float:[7,3,1,""],Sint:[7,3,1,""],Uint:[7,3,1,""],maxsint:[7,1,1,""],maxuint:[7,1,1,""],minsint:[7,1,1,""]},"turboctl.telegram.datatypes.Bin":{__bytes__:[7,4,1,""],__init__:[7,4,1,""]},"turboctl.telegram.datatypes.Data":{__add__:[7,4,1,""],__eq__:[7,4,1,""],__getitem__:[7,4,1,""],__repr__:[7,4,1,""],bits:[7,4,1,""],n_bytes:[7,4,1,""],value:[7,4,1,""]},"turboctl.telegram.datatypes.Float":{__add__:[7,4,1,""],__bytes__:[7,4,1,""],__getitem__:[7,4,1,""],__init__:[7,4,1,""]},"turboctl.telegram.datatypes.Sint":{__bytes__:[7,4,1,""],__init__:[7,4,1,""]},"turboctl.telegram.datatypes.Uint":{__bytes__:[7,4,1,""],__init__:[7,4,1,""]},"turboctl.telegram.parser":{ERRORS:[9,6,1,""],ErrorOrWarning:[9,3,1,""],PARAMETERS:[9,6,1,""],Parameter:[9,3,1,""],WARNINGS:[9,6,1,""],load_errors:[9,1,1,""],load_parameters:[9,1,1,""],load_warnings:[9,1,1,""],main:[9,1,1,""]},"turboctl.telegram.parser.ErrorOrWarning":{fields:[9,4,1,""],name:[9,6,1,""],number:[9,6,1,""],possible_cause:[9,6,1,""],remedy:[9,6,1,""]},"turboctl.telegram.parser.Parameter":{"default":[9,6,1,""],bits:[9,6,1,""],datatype:[9,6,1,""],description:[9,6,1,""],fields:[9,4,1,""],indices:[9,6,1,""],max_value:[9,6,1,""],min_value:[9,6,1,""],name:[9,6,1,""],number:[9,6,1,""],unit:[9,6,1,""],writable:[9,6,1,""]},"turboctl.telegram.telegram":{Telegram:[10,3,1,""],TelegramBuilder:[10,3,1,""],TelegramReader:[10,3,1,""],checksum:[10,1,1,""]},"turboctl.telegram.telegram.Telegram":{LENGTH:[10,6,1,""],__bytes__:[10,4,1,""],current:[10,6,1,""],flag_bits:[10,6,1,""],frequency:[10,6,1,""],parameter_code:[10,6,1,""],parameter_index:[10,6,1,""],parameter_number:[10,6,1,""],parameter_value:[10,6,1,""],temperature:[10,6,1,""],voltage:[10,6,1,""]},"turboctl.telegram.telegram.TelegramBuilder":{__init__:[10,4,1,""],build:[10,4,1,""],from_bytes:[10,4,1,""],parameters:[10,6,1,""],set_current:[10,4,1,""],set_flag_bits:[10,4,1,""],set_frequency:[10,4,1,""],set_parameter_index:[10,4,1,""],set_parameter_mode:[10,4,1,""],set_parameter_number:[10,4,1,""],set_parameter_value:[10,4,1,""],set_temperature:[10,4,1,""],set_voltage:[10,4,1,""]},"turboctl.telegram.telegram.TelegramReader":{__init__:[10,4,1,""],__repr__:[10,4,1,""],__str__:[10,4,1,""],current:[10,4,1,""],flag_bits:[10,4,1,""],frequency:[10,4,1,""],parameter_error:[10,4,1,""],parameter_index:[10,4,1,""],parameter_mode:[10,4,1,""],parameter_number:[10,4,1,""],parameter_value:[10,4,1,""],telegram:[10,6,1,""],temperature:[10,4,1,""],type:[10,6,1,""],voltage:[10,4,1,""]},"turboctl.ui":{advanced_tui:[11,0,0,"-"],command_line_ui:[12,0,0,"-"],control_interface:[13,0,0,"-"],queuefile:[15,0,0,"-"],status_format:[16,0,0,"-"],table:[17,0,0,"-"],widgets:[18,0,0,"-"]},"turboctl.ui.advanced_tui":{AdvancedTUI:[11,3,1,""]},"turboctl.ui.advanced_tui.AdvancedTUI":{__init__:[11,4,1,""],command_line_interface:[11,6,1,""],display:[11,6,1,""],run:[11,4,1,""]},"turboctl.ui.command_line_ui":{CommandLineUI:[12,3,1,""]},"turboctl.ui.command_line_ui.CommandLineUI":{__enter__:[12,4,1,""],__exit__:[12,4,1,""],__init__:[12,4,1,""],cmd_debug:[12,4,1,""],cmd_exit:[12,4,1,""],cmd_help:[12,4,1,""],cmd_info:[12,4,1,""],cmd_pump:[12,4,1,""],cmd_read:[12,4,1,""],cmd_status:[12,4,1,""],cmd_verbose:[12,4,1,""],cmd_write:[12,4,1,""],cmds_and_aliases:[12,6,1,""],control_interface:[12,6,1,""],debug:[12,6,1,""],indent:[12,6,1,""],input:[12,4,1,""],inputfile:[12,6,1,""],intro:[12,6,1,""],outputfile:[12,6,1,""],print:[12,4,1,""],prompt:[12,6,1,""],run:[12,4,1,""],verbose:[12,6,1,""]},"turboctl.ui.control_interface":{ControlInterface:[13,3,1,""],SERIAL_KWARGS:[13,5,1,""],Status:[13,3,1,""]},"turboctl.ui.control_interface.ControlInterface":{__enter__:[13,4,1,""],__exit__:[13,4,1,""],__init__:[13,4,1,""],close:[13,4,1,""],get_status:[13,4,1,""],pump_off:[13,4,1,""],pump_on:[13,4,1,""],read_parameter:[13,4,1,""],status:[13,6,1,""],timestep:[13,6,1,""],write_parameter:[13,4,1,""]},"turboctl.ui.control_interface.Status":{__setattr__:[13,4,1,""],callback:[13,6,1,""],current:[13,6,1,""],frequency:[13,6,1,""],pump_on:[13,6,1,""],status_bits:[13,6,1,""],temperature:[13,6,1,""],voltage:[13,6,1,""]},"turboctl.ui.queuefile":{QueueFile:[15,3,1,""]},"turboctl.ui.queuefile.QueueFile":{__init__:[15,4,1,""],block:[15,6,1,""],flush:[15,4,1,""],queue:[15,6,1,""],read:[15,4,1,""],readline:[15,4,1,""],write:[15,4,1,""]},"turboctl.ui.status_format":{green_button:[16,6,1,""],palette:[16,6,1,""],red_button:[16,6,1,""],status_screen:[16,1,1,""]},"turboctl.ui.table":{array:[17,1,1,""],table:[17,1,1,""]},"turboctl.ui.widgets":{CommandHistory:[18,3,1,""],CommandLines:[18,3,1,""],Position:[18,3,1,""],ScrollBar:[18,3,1,""],ScrollButton:[18,3,1,""],ScrollableCommandLines:[18,3,1,""],Scroller:[18,3,1,""]},"turboctl.ui.widgets.CommandHistory":{__init__:[18,4,1,""],down:[18,4,1,""],enter_command:[18,4,1,""],get_command:[18,4,1,""],history:[18,6,1,""],index:[18,6,1,""],temp_history:[18,6,1,""],up:[18,4,1,""],update_command:[18,4,1,""]},"turboctl.ui.widgets.CommandLines":{__init__:[18,4,1,""],edit:[18,6,1,""],enter:[18,4,1,""],history:[18,6,1,""],history_down:[18,4,1,""],history_up:[18,4,1,""],inputfile:[18,6,1,""],keypress:[18,4,1,""],move_cursor_to_end:[18,4,1,""],outputfile:[18,6,1,""],update:[18,4,1,""]},"turboctl.ui.widgets.Position":{__init__:[18,4,1,""],absolute:[18,6,1,""],listeners:[18,6,1,""],max_absolute:[18,4,1,""],relative:[18,6,1,""],total_rows:[18,6,1,""],visible_rows:[18,6,1,""]},"turboctl.ui.widgets.ScrollBar":{__init__:[18,4,1,""],background_char:[18,6,1,""],mouse_event:[18,4,1,""],position:[18,6,1,""],render:[18,4,1,""],scroller_char:[18,6,1,""]},"turboctl.ui.widgets.ScrollButton":{__init__:[18,4,1,""],mouse_event:[18,4,1,""],position:[18,6,1,""],step:[18,6,1,""]},"turboctl.ui.widgets.ScrollableCommandLines":{__init__:[18,4,1,""],arrow_down:[18,6,1,""],arrow_up:[18,6,1,""],command_lines:[18,6,1,""],position:[18,6,1,""],scrollbar:[18,6,1,""],scroller:[18,6,1,""]},"turboctl.ui.widgets.Scroller":{__init__:[18,4,1,""],keypress:[18,4,1,""],mouse_event:[18,4,1,""],position:[18,6,1,""],render:[18,4,1,""],widget:[18,6,1,""]},"turboctl.virtualpump":{hardware_component:[19,0,0,"-"],parameter_component:[21,0,0,"-"],virtualconnection:[22,0,0,"-"],virtualpump:[23,0,0,"-"]},"turboctl.virtualpump.hardware_component":{HWParameters:[19,3,1,""],HardwareComponent:[19,3,1,""],Variables:[19,3,1,""]},"turboctl.virtualpump.hardware_component.HWParameters":{__init__:[19,4,1,""],current:[19,6,1,""],error_counter:[19,6,1,""],error_frequency_list:[19,6,1,""],error_hour_list:[19,6,1,""],error_list:[19,6,1,""],frequency:[19,6,1,""],frequency_setpoint:[19,6,1,""],motor_power:[19,6,1,""],motor_temperature:[19,6,1,""],operating_hours:[19,6,1,""],overload_error_counter:[19,6,1,""],power_failure_error_counter:[19,6,1,""],save_data:[19,6,1,""],temperature:[19,6,1,""],voltage:[19,6,1,""],warning_list:[19,6,1,""]},"turboctl.virtualpump.hardware_component.HardwareComponent":{CURRENT:[19,6,1,""],TEMPERATURE:[19,6,1,""],VOLTAGE:[19,6,1,""],__init__:[19,4,1,""],abs_acceleration:[19,6,1,""],frequency:[19,6,1,""],handle_hardware:[19,4,1,""],is_on:[19,6,1,""],off:[19,4,1,""],on:[19,4,1,""],step:[19,6,1,""],stop:[19,4,1,""],variables:[19,6,1,""]},"turboctl.virtualpump.hardware_component.Variables":{__getattr__:[19,4,1,""],__init__:[19,4,1,""],__setattr__:[19,4,1,""],parameters:[19,6,1,""]},"turboctl.virtualpump.parameter_component":{ExtendedParameter:[21,3,1,""],ExtendedParameters:[21,3,1,""],ParameterComponent:[21,3,1,""]},"turboctl.virtualpump.parameter_component.ExtendedParameter":{"default":[21,6,1,""],__init__:[21,4,1,""],__str__:[21,4,1,""],bits:[21,6,1,""],datatype:[21,6,1,""],indices:[21,6,1,""],max_value:[21,4,1,""],min_value:[21,4,1,""],number:[21,6,1,""],parameters:[21,6,1,""],value:[21,6,1,""],writable:[21,6,1,""]},"turboctl.virtualpump.parameter_component.ExtendedParameters":{__init__:[21,4,1,""]},"turboctl.virtualpump.parameter_component.ParameterComponent":{__init__:[21,4,1,""],handle_parameter:[21,4,1,""],parameters:[21,6,1,""]},"turboctl.virtualpump.virtualconnection":{VirtualConnection:[22,3,1,""]},"turboctl.virtualpump.virtualconnection.VirtualConnection":{__enter__:[22,4,1,""],__exit__:[22,4,1,""],__init__:[22,4,1,""],buffer_size:[22,6,1,""],close:[22,4,1,""],close_all:[22,4,1,""],default_process:[22,4,1,""],is_running:[22,4,1,""],port:[22,4,1,""],process:[22,6,1,""],running_instances:[22,6,1,""],sleep_time:[22,6,1,""],thread:[22,6,1,""],user_end:[22,6,1,""],virtual_end:[22,6,1,""]},"turboctl.virtualpump.virtualpump":{VirtualPump:[23,3,1,""]},"turboctl.virtualpump.virtualpump.VirtualPump":{__enter__:[23,4,1,""],__exit__:[23,4,1,""],__init__:[23,4,1,""],connection:[23,6,1,""],hardware_component:[23,6,1,""],parameter_component:[23,6,1,""],process:[23,4,1,""],stop:[23,4,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","exception","Python exception"],"3":["py","class","Python class"],"4":["py","method","Python method"],"5":["py","data","Python data"],"6":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:exception","3":"py:class","4":"py:method","5":"py:data","6":"py:attribute"},terms:{"401e":0,"boolean":[0,13],"break":12,"byte":[7,10,22,23],"case":[0,9,10,19,21,22,24],"catch":[6,12,24],"class":[6,7,9,10,11,12,13,15,17,18,19,21,22,23],"default":[0,9,10,12,13,21,22,24],"enum":[6,10],"final":11,"float":[0,7,13,18,19,22],"function":[0,5,6,8,9,10,12,13,17,18,19,20,22,23],"import":9,"int":[6,7,9,10,13,17,18,21,22],"kivel\u00e4":1,"long":22,"new":[2,7,10,11,12,13,15,18,19,21,22,23],"public":1,"return":[0,5,6,7,9,10,12,13,15,16,17,18,19,21,22,23,24],"short":6,"static":[6,22],"switch":6,"true":[5,6,7,12,13,15,18,22,24],"try":[6,10,11],"while":[0,6,18,21],FOR:1,For:[19,24],Its:[0,13,22],The:[0,1,3,4,5,6,7,9,10,11,12,13,15,16,17,18,19,21,22,23],There:0,These:12,Use:11,Using:[0,1],With:10,__add__:7,__bytes__:[7,10],__enter__:[12,13,22,23],__eq__:7,__exit__:[12,13,22,23],__getattr__:19,__getattribute__:19,__getitem__:7,__init__:[7,9,10,11,12,13,15,18,19,21,22,23],__main__:24,__new__:6,__repr__:[7,9,10],__setattr__:[13,19],__str__:[9,10,21],about:[0,5,9,12,13,24],abov:[10,18,19,24],abs_acceler:19,absolut:[18,24],acceler:[0,6,19],accept:[0,6,7,12,24],access:[0,2,6,10,19,20,21,22,23,24],accesserror:6,accomplish:24,accord:[0,10],accordingli:[13,19],activ:[12,24],actual:[0,10,19,20,21,22,23],add:[10,18],added:[2,5,10,24],addit:[2,3,24],address:10,adr:10,advanc:24,advanced_tui:[1,3,4,14],advancedtui:[11,16],affect:[0,9,10,13,19],after:[0,10,12,21,22,24],again:[12,22],agre:0,air:6,algorithm:[10,12],alia:[12,24],alias:[12,24],all:[0,5,6,7,10,12,13,15,17,18,19,21,22,24],allow:19,along:1,alongsid:6,also:[0,2,3,5,6,9,10,12,13,18,22,24],altern:2,alwai:[0,6,7,10,15,18,19,21],amet:[],among:18,amount:[18,19],analog:[0,19],ani:[0,1,6,7,10,12,18,19,23,24],anoth:[0,2,9,12,18,21],anywher:0,api:[1,3,4,8],appear:0,append:7,appli:[0,19],approxim:18,apt:24,area:24,aren:[0,10],arg:[6,24],argument:[5,6,7,10,12,13,15,18,22,24],around:24,arrai:17,arrow:18,arrow_down:18,arrow_up:18,ask:[12,13],assign:[0,6,10,21,22],associ:10,ast:24,attribut:[6,9,10,12,13,17,18,19,21,22],attributeerror:[6,15],auto_upd:[12,13],automat:[3,7,9,10,11,13,18,19,22,24],avoid:21,back:[0,5,13,21,23,24],background:[12,24],background_char:18,bar:[18,24],base:[6,7,10,11,18,21,22,24],basescreen:11,basic:24,baudrat:13,bcc:10,beak:11,becaus:[6,7,10,12,19,21,24],been:[0,6,11,18,24],befor:[22,24],begin:[22,23],behav:21,behaviour:[0,9,15,18,23],being:[0,6,18,24],below:[0,10,11,18,19],between:[13,15,18,19,24],bin:[7,9,10,24],binari:7,bit:[0,5,6,7,9,10,19,21,22],block:[6,10,11,12,13,15,22,23],bool:[9,12,13,15,19],both:[0,5,6,10,13,19,21,24],bottom:18,bound:13,box:18,brows:18,buffer:22,buffer_s:22,bug:24,build:[10,19],built:[6,10,11,12,19,24],button:18,byte_:10,bytes:[7,13],bytes_:10,bytes_in:23,call:[7,9,10,11,12,13,18,19,22,23,24],callabl:[11,13],callback:13,can:[1,2,5,6,7,9,10,12,13,15,17,18,19,20,21,22,23,24],cannot:[0,5,6,7,9,10,12,19,21,23,24],cannot_chang:[0,6],cannotchangeerror:6,canva:18,caught:[12,24],caus:[5,9,19],celsiu:9,chang:[0,6,9,10,11,13,18,19,21,23],channel:[0,6],charact:[6,7,15,18],check:[10,22],checksum:10,choos:2,circl:16,circuit:[10,13,19],circular:6,circumv:6,clarif:1,classmethod:22,classnam:[7,10],click:[18,24],close:[11,12,13,22,23,24],close_al:22,cls:6,cmd_:12,cmd_debug:12,cmd_exampl:12,cmd_exit:12,cmd_help:12,cmd_info:12,cmd_list:[],cmd_pump:12,cmd_read:12,cmd_statu:12,cmd_verbos:12,cmd_write:12,cmds_and_alias:12,code:[0,1,3,4,8,10,11,19,22],col:18,collect:[6,19],colour:16,column:17,combin:[7,11],command:[0,1,5,6,10,11,12,13,18,19,21,22,23],command_lin:18,command_line_interfac:11,command_line_ui:[1,3,4,14],commandhistori:18,commandlin:18,commandlineui:[11,12],common:5,commun:[0,8,10,11,22],compar:0,compat:24,complement:7,compon:[6,19],compos:7,comput:[6,10,24],condit:[6,9,10,13,19],conduct:0,connect:[5,13,22,23,24],consecut:18,consist:[10,18,24],constant:19,construct:[10,21],consum:12,contact:1,contain:[0,3,4,5,6,7,8,9,10,12,14,15,18,19,20],content:[10,11,12,13,16,23,24],continu:[12,22],contro:0,control:[0,1,5,6,10,11,12,15,16,19],control_interfac:[1,3,4,12,14],controlbit:[6,10,19],controlinterfac:[12,13],convent:10,convert:[7,10,13,19],cool:6,copi:[1,10,21],copyright:1,correct:[0,6],correctli:[19,24],correspond:[3,6,7,9,10,12,17,19,21],count:[18,19],cover:0,crash:[11,12,24],creat:[6,8,9,10,12,13,15,17,18,22,24],ctrl:24,cumbersom:10,current:[9,10,13,18,19,21,22,24],cursor:18,custom:[6,10,24],customint:6,cut:[0,19],cvan:0,data:[0,5,7,9,10,19,21,22,23],databas:17,dataclass:[9,10],datatyp:[1,3,4,8,9,10,19,21],deactiv:[12,24],debian:24,debug:[12,24],deceler:[0,6,19],decreas:18,default_process:22,defin:[0,5,6,7,9,10,11,13,15,18,19,21,24],degre:9,del:22,denot:10,depend:[1,6,9,10,12,21,24],describ:[6,9,12,21,24],descript:[6,9,19],descriptor:22,detach:24,detail:[0,1,2,7,10,12],detain:[0,6],determin:[10,13],dev:[13,22,24],develop:1,devic:[13,22],dict:[9,10,17,19,21],dictionari:9,differ:[0,6,7,9,10,15,18],direct:6,directli:[7,10],directori:[1,9,24],disabl:[12,24],disappear:24,discov:0,displai:[0,11,12,16,17,18,21,24],distribut:1,disturb:19,divid:[4,7],docstr:[12,18],document:[0,11],doe:[0,15],doesn:[0,2,6,10,12,22,24],doing:22,dolor:[],don:24,done:[18,24],down:[18,24],download:2,downm:[],drag:24,draw:18,due:[5,24],dummi:19,dure:[12,24],each:[6,10,12,17,18,19,21],easi:24,easier:[12,15,24],easiest:6,easili:[6,10,12,15,24],edg:18,edit:[12,18,24],effect:18,either:[1,7],elabor:0,empti:[5,7,13,17,18,23],emul:[15,18],enabl:[6,10,23],encapsul:19,encount:15,end:[7,10,11,12,18,22,24],enough:0,enter:[11,12,13,18],enter_command:18,entir:24,entri:[10,11,18],enumnam:6,env:24,equal:[7,18],errata:1,error:[0,5,6,9,10,12,17,19,21,24],error_count:19,error_frequency_list:19,error_hour_list:19,error_list:19,errororwarn:[9,17],etc:[0,18],eval:10,evalu:[5,10],even:[0,1,10,19,21,24],event:18,everi:[12,13,19,24],evid:0,exact:[10,19],exactli:[6,7],exampl:[7,10,11,12,21,24],exc_typ:13,exc_valu:13,except:[6,7],exception_typ:12,exception_valu:12,exclud:10,exclus:10,execut:[9,11,12,24],exist:[6,7,10,12,15],exit:[11,12,13,22,23,24],expand:19,explain:[9,16,18],explicitli:[10,13],express:7,extend:21,extended_paramet:21,extendedparamet:[19,21],extens:0,extern:2,fact:0,factori:13,fail:[0,10],fals:[5,6,7,12,13,15,18,22,24],far:18,fast:19,featur:24,felik:1,field:[0,6,9,11,17,19],file:[9,11,12,15,18,22],filenam:9,filenotfounderror:9,fill:24,find:19,first:[6,10],firstnam:1,fit:1,fix:18,flag:[0,13,15,19],flag_bit:10,flagbit:6,flow:18,flush:[12,15],focu:18,follow:[2,3,4,5,6,7,10,12,19,21,22,24],form:[7,12,13,18,22,23],format:[7,10,11,16,17,21],found:[0,9,19,21],foundat:1,four:12,free:[1,22],freez:19,frequenc:[0,6,10,13,19],frequency_setpoint:19,frequent:0,friendli:10,from:[0,6,9,10,11,12,15,18,19,21,22,23,24],from_byt:10,full:[0,7],fusor:1,futur:19,gener:[1,9,10,18],get:[7,12,24],get_command:18,get_parameter_cod:6,get_parameter_mod:6,get_statu:13,give:[6,7,12,18,19,24],given:[0,7,10,12,13,15,18,19,22,24],gnu:1,gradual:19,green:16,green_button:16,group:6,handl:[18,19,21,22,23],handle_hardwar:19,handle_paramet:[19,21],happen:[0,15,24],hardwar:[19,23],hardware_compon:[1,3,4,20,23],hardwarecompon:[19,23],has:[0,3,6,9,10,12,18,19,21,22,24],hasn:11,have:[0,1,3,5,6,7,9,10,13,19,22,24],havent:0,height:18,help:[12,24],helsinki:1,here:[10,16,18,22],hierarchi:0,histori:[18,24],history_down:18,history_up:18,hold:[9,21],hope:1,hour:19,how:[0,7,10,16,18,19,22],howev:[0,6,10,19,24],http:1,human:[10,12],hvctl:[1,24],hwparamet:19,ident:18,ieee:7,ignor:[12,13,19],illeg:0,immedi:24,immut:21,impli:1,inaccuraci:0,includ:[0,2,10,12,15,18,19],incom:23,incomat:[],incompat:24,increas:[12,18],ind:10,indent:12,index:[0,5,6,7,9,10,12,13,18,19,24],index_error:0,indic:[0,9,10,15,19,21],infinit:17,info:[0,12,24],inform:[11,12,13,24],inherit:6,inindex:0,initi:[6,7,10,11,12,13,16,18,19,21,22,23],input:[11,12,15,18,19,22],input_:22,inputfil:[11,12,18],ins:10,insid:24,instal:[1,11,24],instanc:[5,6,7,10,12,13,19,21,22],instead:[0,6,7,9,10,11,12,16,17,18,19,22,24],inteerpret:[],integ:[0,7,19],intend:[1,2],interfac:[1,2,11,12,14,15,18],interfacew:24,intermedi:[10,13,19],intern:3,interpret:[10,16,22,23,24],interv:24,intial:15,intro:12,invalid:[0,5,6,7,10,12,13,24],invis:18,ipsum:[],is_on:19,is_run:22,isn:[0,6,9,10,12,13,17,24],issu:[11,24],iter:[10,11,12,16,18,19],its:[6,7,9,10,11,12,15,18,22,23,24],itself:6,just:10,keep:[6,13,18,19,24],kei:[7,9,10,17,18,21,24],keyerror:21,keypress:18,keyword:13,knowledg:0,kwarg:6,lack:[6,7],larger:0,largest:7,lastnam:1,later:[1,18],latest:18,launch:24,least:[0,19,24],leav:[0,24],left:[11,18,24],len:7,length:[7,10,18,21],less:[7,15],letter:[12,24],leybold:[1,10],lge:10,librari:[2,18],like:[0,6,7,9,11,12,15,18,21,22],likewis:7,limit:0,line:[9,11,12,18,24],linux:[1,2,18,24],list:[0,1,9,10,12,13,17,18,19,21],listen:18,literal_ev:24,load_error:9,load_paramet:9,load_warn:9,local:24,locat:[2,3,9,11,18,19,24],lock:[6,19],log:24,longer:[12,24],loop:[11,12],lorem:[],lost:19,machin:[22,24],made:[2,18],mai:[0,7,10,11,12,18],main:[9,11],mainloop:11,make:[0,6,11,12,15,18,19,23,24],manag:24,mani:[7,22],manner:22,manual:[1,10,21],match:[0,6,7,19],matter:0,max:6,max_absolut:18,max_valu:[9,21],maximum:[0,9,17,18,21],maxsint:7,maxuint:7,mean:[6,9,10],meant:[6,7,22],member:[6,10,13],member_nam:6,member_valu:6,memori:[0,6,18,19],mention:24,merchant:1,messag:[6,10,12,24],metaclass:6,method:[6,7,9,10,11,12,13,15,19,22],min:6,min_valu:[9,21],minimum:[0,9,21],minmax:6,minmaxerror:6,minsint:7,minumum:[0,9],mirror:[0,3],mode:[0,6,10,12,24],modifi:[1,18,19],modul:[1,5,6,7,9,10,11,12,15,16,17,18,19,21,22,23],modulenam:3,more:[0,1,7,10,24],most:[0,3,7,19,21,22,24],motor:[10,13,19],motor_pow:19,motor_temperatur:19,mous:[18,24],mouse_ev:18,move:[18,19],move_cursor_to_end:18,multipl:[0,6,9,18],multipli:7,must:[6,7,10,13],n_byte:7,name:[6,9,10,12,13,17,19,22,24],nan:7,necessari:24,need:[6,7,12,19,21],neg:[7,10,18],nest:16,never:15,newer:[18,24],newest:18,newlin:15,next:0,no_writ:6,node:10,non:[6,7,10,21],none:[0,6,7,9,10,12,13,15,18,22,24],nonvolatil:[0,6,19],normal:[0,6,10,12,19,24],note:[1,10,13,19,24],noth:[15,18],num:0,number:[0,5,6,7,9,10,12,13,15,17,18,19,21,24],numer:0,nwere:[],object:[6,7,9,10,11,12,13,15,16,17,18,19,21,22,23,24],occasion:0,occur:19,off:[0,5,12,13,19,24],often:6,old:[18,24],older:[18,24],oldest:[18,19],onc:22,one:[6,10,13,15,18,24],ones:[0,18],onli:[0,6,7,10,12,13,18,19,21,22,24],open:[],openpti:15,oper:[0,1,2,6,10,12,19,24],operating_hour:19,option:[1,7,24],order:[2,6,9,12,19,21,24],ordereddict:9,org:1,origin:[0,18,21],other:[2,6,7,10,18,19,21,22,24],othererror:6,otherwis:[0,5,6,7,10,12,13,18,19,22],out:19,output:[6,11,12,15,18,22],outputfil:[11,12,18],outsid:6,over:24,overload:[6,19],overload_error_count:19,overrid:10,p18:[9,21],pack:6,packag:[0,1,2,4,23,24],pad:7,page:0,palett:[11,16],parallel:[11,12,13,19,22,23],param_channel:[0,6,19],paramet:[0,5,6,7,9,10,11,12,13,16,17,18,19,21,22,23,24],parameter_cod:10,parameter_compon:[1,3,4,20,23],parameter_error:10,parameter_index:10,parameter_mod:10,parameter_nam:19,parameter_numb:10,parameter_valu:10,parameteraccess:6,parametercod:6,parametercompon:[19,21,23],parametererror:[6,10],parametererrorx:6,parameterexcept:6,parameterexceptionmeta:6,parameterindexerror:6,parameterrespons:6,pariti:[10,13],pars:[9,12,24],parser:[1,3,4,8],part:[15,18,19,21],parti:24,particular:1,pase:24,pass:[6,10,11,12,13,18,19],path:[2,9,24],pattern:12,perform:23,permit:10,physic:[0,23],pictur:[],pke:10,plain:12,point:[0,7,18],poll:[12,24],port:[10,12,13,22,24],portion:18,posit:[7,18,19],possibl:[6,9,15,19,22,23,24],possible_caus:9,power:[0,10,19],power_failure_error_count:19,precis:7,present:[6,11,16,19],press:[18,24],prevent:[0,6,11,12,19,24],previou:18,previous:18,print:[11,12,15,17,18,24],prioriti:0,probabl:[0,2,11],problem:6,process:[0,6,22,23],process_channel:[6,19],program:[1,6,11,12,14,15,20,23],prompt:12,proper:24,properli:6,properti:[6,7,9,10,18,19,21,22],protocol:10,provid:[12,18,24],pts:22,pty:15,publish:1,pump:[0,1,5,6,8,9,10,12,13,16,19,20,21,23,24],pump_off:13,pump_on:[5,13],purpos:[1,9,10,19],pwe:10,pyseri:2,python3:24,python:[1,2,6,10,19,22,24],pythonpath:2,pzd1:10,pzd2:10,pzd3:10,pzd4:10,pzd6:10,queri:[5,6,10,13,19,21],queue:15,queuefil:[1,3,4,14],quot:24,race:19,rais:[0,5,6,7,9,10,12,13,15,17,21,24],rang:[0,6,7,9],rate:19,read:[0,5,6,7,9,10,11,12,13,15,18,19,22,24],read_paramet:[5,13],readabl:[10,12],readi:[0,6,17,19],readlin:[12,15],real:[0,24],reason:[0,6],reassign:22,receiv:[1,5,12,13,24],recent:19,recogn:[19,24],red:16,red_button:16,redirect:15,redistribut:1,refer:[6,12,21,22,24],referenc:21,reflect:19,regard:0,regardless:10,register_palett:11,regular:[21,24],rel:[2,18,24],relai:6,relat:19,remedi:9,remot:24,remov:22,render:18,replac:0,repli:[0,5,6,10,12,13,19,21,23,24],report:[0,19],repr:7,repres:[6,7,9,10,13,19,21],represent:[7,10],reprsent:19,request:[5,10,12],requir:24,reserv:10,reset:[0,6,18],reset_error:6,resourc:12,respect:0,respond:23,respons:[0,6,10],respresent:10,restructuredtext:12,result:[0,10],resum:24,revers:10,right:24,rotor:[10,19],round:7,rout:19,row:[17,18],rs485:10,run:[1,2,6,9,11,12,22],running_inst:22,runtim:6,runtimeerror:9,s16:[0,6],s16f:6,s32:6,s32f:6,safe:15,safeguard:11,same:[6,7,9,10,15,17,18,19,23,24],save:[0,6,15,18,19],save_data:19,savingerror:6,screen:[1,11,12,16,18],script:[2,9,11,24],scroll:[18,24],scrollabl:18,scrollablecommandlin:[11,18],scrollbar:18,scrollbutton:18,scroller:18,scroller_char:18,second:[13,19,22,24],section:0,see:[1,2,7,12,18,19,21],seem:[0,22],select:18,self:[0,6,7,12,13,22,23],send:[5,11,12,13,22,24],sent:[0,5,6,10,13,19,21,22,23,24],sep:12,separ:[9,24],sequenc:[7,17],serial:[5,10,13,22,23,24],serial_kwarg:13,serialexcept:5,session:24,set:[0,5,7,9,10,12,13,15,17,18,19,22,24],set_curr:10,set_flag_bit:10,set_frequ:10,set_paramerer_numb:10,set_parameter_index:10,set_parameter_mod:10,set_parameter_numb:10,set_parameter_valu:10,set_temperatur:10,set_text:11,set_voltag:10,setpoint:[0,6,10,19],setter:10,sever:[0,12],share:[5,18],shell:24,should:[0,1,2,10,11,12,13,15,17,18,19,21,22,24],show:[6,10,24],side:24,sign:[0,7],signal:23,signatur:[7,13,22],signifi:[0,9],similar:[6,7,16],simpl:[10,12,24],simpler:19,simpli:[0,2,22,24],simul:[19,20,22,23,24],simultan:6,sinc:[0,6,7,10,13,19],singl:[7,10,12,18,24],sint:[7,10,19],sit:[],size:[9,15,18,22],slave:10,sleep_tim:22,slice:7,smaller:7,smallest:7,softwar:1,sole:7,solv:6,some:[0,2,5,6,9,19,21,22,24],someth:6,soon:[0,24],sourc:[3,4],space:[12,24],special:19,specif:[6,24],specifi:[0,7,9,10,11,12,17,19,23,24],sphinx:6,split:12,ssh:24,stai:5,standard:[2,15],standbi:6,start:[0,10,12,22,24],state:[0,11,13],stator:13,statu:[0,5,6,10,12,13,16,19,24],status_bit:13,status_format:[1,3,4,14],status_screen:16,statusbit:[6,10,13,19],stdin:12,stdout:12,step:[12,18,19],still:[0,1],stop:[15,19,22,23],stopbit:13,store:[7,13,18,19],str:[6,7,9,10,13,17,18,21,24],string:[6,7,9,10,12,15,16,18,24],stringio:15,structur:[3,10],stx:10,style:11,subclass:[6,7,9,10,19,21],subpackag:[3,4,8,14,20],substitut:24,success:6,suggest:0,suitabl:22,superclass:[6,7],suplli:0,suppli:[0,7,19,22,24],support:10,suppress:[],sure:11,switch_on_lock:6,symbol:18,syntax:[6,9,10,12,19],sys:12,system:[1,2,24],tabl:[1,3,4,14],tabul:2,take:[0,24],team:1,telegram:[0,1,3,4,5,6,7,9,12,13,19,21,23,24],telegram_typ:6,telegrambuild:[10,19,21],telegramread:[5,10,13,19,21],tell:[5,6,18],temp_histori:18,temp_warn:6,temperatur:[6,10,13,19],temporarili:19,term:1,termin:[11,18,24],test2:[],test:[0,2,3,9,10,17,19,20,23,24],test_:3,test_turboctl:3,text:[9,10,11,12,16,17,18],textiobas:15,than:[0,7,15,18],theargument:[],thei:[0,10,12,19],them:[12,19,21,22,24],thew:0,thi:[0,1,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],thing:0,third:24,those:[10,12,15,17,18,19,24],though:[0,24],thread:[11,12,13,15,19,22,23],three:[0,4],through:[0,10,11,13,18,19,22],thu:[10,23],time:[0,12,13,15,19,24],timeout:13,timestep:[13,19],togeth:6,too:0,top:18,total:19,total_row:18,toward:[18,19],traceback:[12,13,22,23],track:[13,18,19],tri:[0,6,10,19,23],ttyusb0:[13,24],tupl:[12,24],turboctl:[0,3,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],turbovac:[1,6,8,10,20,23],turbovacuum:1,turn:[0,5,6,10,12,13,19,24],tweak:2,two:[7,18],txt:9,type:[0,6,7,9,10,11,12,13,15,18,19,21,22,23,24],type_:[10,22,23],typeerror:[7,10,12,24],typic:18,ubuntu:24,uint:[7,10,19,21],unalt:12,uncang:22,unclear:0,under:1,unindex:[0,5,6,9,13,21],uniniti:21,union:9,unit:[0,9,19],univers:1,unknown:6,unless:10,unlik:[0,19],unsign:[0,7],until:[0,22],unued1:[],unus:6,unused12:6,unused1:6,unused2:6,unused3:6,unused4:6,unused8:6,unused9:6,unwrit:0,updat:[13,18,19,24],update_command:18,upon:[12,13,22,23],urwid:[2,11,16,18,24],usag:[1,2],usb:10,use:[6,10,12,24],used:[0,2,5,6,7,8,9,10,11,12,13,16,17,18,19,21,22,23,24],useful:[0,1],user:[1,2,10,11,12,13,14,16,18,21,22],user_end:22,uses:[2,6,7,10,11,12,18,24],using:[2,10,12,15,24],usr:24,uss:10,vacuum:10,valid:[0,7,10,23],valu:[0,5,6,7,9,10,12,13,15,17,18,19,21,22,23,24],valueerror:[5,6,7,10,12,13,17,24],valv:6,variabl:[0,19,22],vent:6,verbal:6,verbos:[12,24],versa:[0,19],version:[1,2,18,21,24],vertic:18,via:[0,10,24],vice:[0,19],view:18,virtual:[22,23,24],virtual_end:22,virtualconnect:[1,3,4,20,23],virtualpump:[0,1,3,4,19,21,22],visibl:18,visible_row:18,volatil:0,voltag:[0,10,13,19],w16:6,w16f:6,w32:6,w32f:6,wai:[6,10,23,24],wait:[11,12,19,22],warn:[0,6,9,12,17,19,24],warning_list:19,warranti:1,welcom:12,well:0,were:0,what:0,whatev:0,wheel:[18,24],when:[0,6,7,9,10,11,12,18,19,22,24],whenev:[0,13,18,24],where:[10,12,24],whether:[0,6,9,10,12,13,15,18,19,24],which:[0,3,5,6,7,9,10,11,13,16,17,18,19,21,22,24],whitespac:12,why:0,widget:[1,3,4,14,16],width:[17,18],window:2,wirth:0,without:[0,1,2,6,10,15,19,20,22,23,24],won:2,wont:0,word:0,work:[0,2,6,7,9,10,12,19,22,24],would:[6,9,15,23,24],wrap:[11,15,17],writabl:[0,9,21],write:[0,5,6,10,12,13,15,19,22,24],write_paramet:[5,13],written:[1,2,5,10,11,12,13,15,18,21,22],wrong:0,wrong_num:6,wrongnumerror:6,www:1,x1_error:6,x1_normal:6,x1_warn:6,x201:6,x202:6,x203:6,xor:10,you:[1,24],your:[1,2,24],zero:[7,10]},titles:["Errata to the user manual","TurboCtl","Installation","Packages and modules","turboctl","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">api</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">codes</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">datatypes</span></code>","telegram","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">parser</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">telegram</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">advanced_tui</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">command_line_ui</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">control_interface</span></code>","ui","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">queuefile</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">status_format</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">table</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">widgets</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">hardware_component</span></code>","virtualpump","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">parameter_component</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">virtualconnection</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">virtualpump</span></code>","Usage"],titleterms:{The:[2,24],Using:24,advanced_tui:11,api:5,author:1,clarif:0,code:6,command:24,command_line_ui:12,control_interfac:13,datatyp:7,depend:2,directori:2,document:1,errata:0,hardware_compon:19,instal:2,interfac:24,licens:1,list:24,manual:0,modul:3,note:0,packag:3,parameter_compon:21,parser:9,program:24,queuefil:15,run:24,screen:24,start:[],status_format:16,tabl:17,telegram:[8,10],turboctl:[1,2,4],usag:24,user:[0,24],virtualconnect:22,virtualpump:[20,23],widget:18}})