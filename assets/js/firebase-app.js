$(function(){
	var ref = new Firebase("https://viemhonghat.firebaseio.com/pl");
	// Attach an asynchronous callback to read the data at our posts reference
	ref.on("child_added", function(snapshot, prevChildKey) {
		var p = snapshot.val();
		var code = "";
		function addcode(lable, css, value){
			var check = value || '';
			if (check !== '') code += "<div class='plc "+css+"'>"+lable+value+"</div>";
		}
		
		addcode("","name", p.name);
		addcode("","pinfo", p.pinfo);
		code += "<div hidden class='plmore'>";
		addcode("<b>Email:</b> ","email", p.email);
		addcode("<b>Bệnh trạng:</b> ","condition", p.condition);
		addcode("<b>Thuốc đã dùng:</b> ","medicines", p.medicines);
		addcode("<b>Kết quả:</b> ","result", p.result);
		code += "</div>";
		//if(p.birthYear !== undefined) code += "<td class='plc'>Năm sinh:</td><td class='vc'>"+p.birthYear+"</td>";
		$(".loader").hide();
		$(".piece").show();
		$(".plt").append("<div class='plr'> "+code+"</div>");
		
		//Add event for rows
		$(".plr").click(function(){
			console.log("clicked!");
			$(".plr").removeClass("plractive");
			$(this).addClass("plractive");
			$(".plmore").hide();
			$(".plmore",this).show();
		});
	}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
	});
	
});