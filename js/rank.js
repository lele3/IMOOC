$('a.li-three').click(function(){
				console.log($('a.li-we:eq(0)').attr('title'));
				$.post('/IMOOC/CourseQueryServlet',
					{
						c_classification:$('.li-we:eq(0)').attr('title'),
						c_rank:$(this).text()
					}, function(data) {
					var str = '';
					console.log("dddddddddddd");
					$.each(JSON.parse(data),function(i,item){
						str += "<li>" + 
							"<div class = 'section_main_top'>" +
							"<span class = 'span'>"+item.course_rank+"/"+item.course_studyTime+"</span>"+
							"<img src=./imgs/"+item.course_name+".jpg alt=''>"+
							"</div>"+
							"<div class = 'section_main_bottom'>" +
							"<h4>"+item.course_name+"</h4>"+
							"<p>"+item.course_description+"</p>"+
							"<span>"+item.course_progress+"</span>"+
							"<span>"+item.course_studyNum+"</span>"+
							"</div>"+
							"</li>";
					});
					$('.section_main ul').html(str);
				});
				
				
				return false;
			});
