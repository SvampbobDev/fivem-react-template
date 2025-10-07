fx_version 'cerulean'
game 'gta5'
use_experimental_fxv2_oal 'yes'
lua54 'yes'

author 'Hyuuh https://github.com/Hyuuh'
description 'Template base'
version '0.0.0'


shared_scripts {
	'@ox_lib/init.lua',
	'@qbx_core/modules/lib.lua',
	'config/*.lua',
}

client_scripts { 'client/*.lua' }

server_scripts { '@oxmysql/lib/MySQL.lua', 'server/*.lua' }

ui_page 'web/dist/index.html'

files {
	'web/dist/index.html',
	'web/dist/**/*',
	'modules/nui.lua'
}
