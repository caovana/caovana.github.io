//Required jquery, firebase, angular, angularfire
var rootRef = new Firebase('https://viemhonghat.firebaseio.com/');
var authData = rootRef.getAuth();
function goIndex(){window.location.href = "/admin/pages/index.html";}
function goLogin(){window.location.href = "/admin/pages/login.html";}
function checkAuthStatus(dest){
    if (authData) {
        rootRef.child('users').child(authData.uid).child('roles').on('value', function(snapshot){
            var data = snapshot.val();
            if(data){
                if (data.administrator !== true) {
                    alert("Tài khoản này không có quyền truy cập!\nVui lòng sử dụng tài khoản khác.");
                    goLogin();
                }
                else if(dest){window.location.href=dest;}
            }else{goLogin();}
        }, function(e){
            console.log(e);
            //goLogin();
        });
    } else {
        goLogin();
    }
}