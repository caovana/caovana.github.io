//Required jquery, firebase, angular, angularfire
var rootRef = new Firebase('https://viemhonghat.firebaseio.com/');
var authData = rootRef.getAuth();
function goIndex(){window.location.href = "/admin/pages/index.html";}
function goLogin(){window.location.href = "/admin/pages/login.html";}
function checkAuthStatus(){
    if (authData) {
        rootRef.child('users').child(authData.uid).on('value', function(snapshot){
            var data = snapshot.val();
            if(data){
                if (data.role != 1) goLogin();
            }else{goLogin();}
        }, function(e){
            console.log(e);
            //goLogin();
        });
    } else {
        goLogin();
    }
}