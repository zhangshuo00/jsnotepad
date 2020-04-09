np.menuData = [
    {//文件菜单
        title:'文件(F)',
        menuItems:[
            {
                title:'新建(N)',
                shortcut:'Ctrl+N',
                enabled:true,
                handler:function(){console.log('新建(N) menu clicked!')}
            },
            {
                title:'打开(O)...',
                shortcut:'Ctrl+O',
                enabled:true,
                handler:function(){console.log('打开(O) menu clicked!')}
            },
            {
                title:'保存(S)',
                shortcut:'Ctrl+S',
                enabled:true,
                handler:function(){console.log('保存(S) menu clicked!')}
            },
            {
                title:'另存为(A)...',
                shortcut:'',
                enabled:true,
                handler:function(){console.log('另存为(A) menu clicked!')}
            }
        ],
        width:'202px',
        left:'0px'
    },
    {//编辑
        title:'编辑(E)',
        menuItems:[
            {
                title:'撤销(U)',
                shortcut:'Ctrl+Z',
                enabled:false,
                handler:function(){console.log('撤销(U) menu clicked!')}
            },
            {
                title:'剪切(T)',
                shortcut:'Ctrl+X',
                enabled:true,
                handler:function(){console.log('剪切(X) menu clicked!')}
            },
            {
                title:'复制(C)',
                shortcut:'Ctrl+C',
                enabled:false,
                handler:function(){console.log('复制(C) menu clicked!')}
            },
            {
                title: '粘贴(P)',
                shortcut: 'Ctrl+V',
                enabled: false,
                handler: function() { console.log('粘贴(P) menu clicked!'); }
            },
            {
                title: '删除(L)',
                shortcut: 'Del',
                enabled: false,
                handler: function() { console.log('删除(L) menu clicked!'); }
            },
        ],
        width: '218px',
        left: '52px'
    },
    {//格式
        title:'格式(O)',
        menuItems:[
            {
                title:'自动换行(W)',
                shortcut:'',
                enabled:true,
                handler:function(){}
            },
            {
                title:'字体(F)...',
                shortcut:'',
                enabled:true,
                handler:function(){
                    $dlgFont.show({
                        family:np.fontFamily,
                        style:np.fontStyle,
                        size:np.fontSize,
                        okHandler:np.fontHandler
                    })
                }
            }
        ],
        width:'156px',
        left:'106px'
    },
    { //查看
        title: '查看(V)',
        menuItems: [
          {
            title: '状态栏(S)',
            shortcut: '',
            enabled: true,
            handler: function() {}
          }
        ],
        width: '138px',
        left: '162px'
    },
    {//帮助
        title: '帮助(H)',
        menuItems: [
          {
            title: '查看帮助(H)',
            shortcut: '',
            enabled: true,
            handler: function(){}
          },
          {
            title: '关于记事本(A)',
            shortcut: '',
            enabled: true,
            handler: function(){}
          },
        ],
        width: '166px',
        left: '216px'
    }
]