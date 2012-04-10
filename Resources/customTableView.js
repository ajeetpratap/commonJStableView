/**
 * @author Ajeet
 */

exports.customTableView = function(param)
{
    var win = Ti.UI.createWindow();
    var mydata = [];
    var imageUrl= [];
    var rowText = [];
    
    imageUrl=param.imageUrl;
    //Fetching the image name from the imageUrl
    for(i=0; i< imageUrl.length;i++)
    {
        var nameInput = imageUrl[i].replace(/^.*[\\\/]/, ''); // This gives the image name with its extension,
        // here we are removing the extension and just fetching the name
        var name = nameInput.substr(0, nameInput.lastIndexOf('.')) || nameInput;
        rowText[i]= name;
    }
    
    
   // var customText = [];
   // customText = param.customText;
    
    //Building the custom row
    for(i=0;i< imageUrl.length; i++)
    {
        var cancelBtn;
        var row;
        var myimage;
        if(Ti.Platform.osname !='android')
        {
            cancelBtn = Ti.UI.createButton({
            image:'/delete.png',
            width:'32dp',
            height:'32dp',
            style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
            left : '250dp'
            });
            
            row = Ti.UI.createTableViewRow({height:'70dp', backgroundImage:'images/brown.png', backgroundRepeat:'true'});
            
             myimage = Ti.UI.createImageView({
            backgroundImage:imageUrl[i],
            top:'5dp',
            width:'64dp',
            left: '4dp',
            height:'64dp',
            borderColor: '#fff',
            borderWidth:'2dp',
            borderRadius:'7dp'
            
        });
        }
        else
        {
            cancelBtn = Ti.UI.createButton({
            image:'images/delete.png',
            width:'32dp',
            height:'32dp',
            left : '250dp'
            });
            row = Ti.UI.createTableViewRow({backgroundImage:'images/brown.png'});
            
              myimage = Ti.UI.createImageView({
            backgroundImage:imageUrl[i],
            top:'5dp',
            width:'64dp',
            left: '4dp',
            height:'64dp'
           
            
        });
        }
        
      
        var rowName = Ti.UI.createLabel({
           text: rowText[i],
           top:'2dp',
           color:'#fff',
           //width:'auto',
           font:{fontSize:16,fontWeight:'bold'},
           left:'80dp'
        });
        var rowCustomText = Ti.UI.createLabel({
           text:param.customText[i],
           top:'30dp',
           color:'#fff',
           font:{fontSize:12},
           left:'80dp'
            
        });
        
        row.add(myimage);
        row.add(rowName);
        row.add(rowCustomText);
        row.add(cancelBtn);
        
        row.className = 'myData';
        mydata[i]=row;
        
    }
    
    var myTableView = Ti.UI.createTableView({
        data:mydata,
        allowsSelection:'true'
    });
    
    win.add(myTableView);
    
    return win;
    
}



