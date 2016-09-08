
// auto guahao
function guahao(){
	if(new Date().getHours()==8){
		var scheduleList = document.querySelectorAll('div[id=schedules-list] div ul li');
		for (var i = 0; i < scheduleList.length; i++) {
			if(scheduleList[i].getAttribute('class')!='schedules-item cannot'){
				scheduleList[i].click();
				clearInterval(stop);
			}else{			
				location.reload();
			}
		}
	}
}

function refreash(){
	if(new Date().getHours()==8){
		var refreash = document.querySelector('a[class=J_Reload]');
		if(refreash!=null){
			refreash.click();
		}
	}
}

$stop=setInterval(guahao,1000); //等待页面加载完
setInterval(refreash,1000);

