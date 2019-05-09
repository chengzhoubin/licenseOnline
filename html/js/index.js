$(function() {
				$(".send_emails").on("click", function() {
					Send_emails();
				})

			});

			function changeLogFormatter(value, row, index) {
				return '<a href="javascript:;">' + value + '</a>';
			}

			function operationFormatter(value, row, index) {
				return '<a href="javascrip:;" class="send_emails" > 审批</a>';
			}

			function Send_emails(opt) {
				$(".mask").css("display", "block");
				$(".approval_pop").css("display", "block");
				var dom = document.getElementById(opt);
				dom.style.display = "block";
				var winw = window.innerWidth;
				var winH = window.innerHeight;
				var ew = dom.offsetWidth;
				var eh = dom.offsetHeight
				dom.style.left = winw / 2 - ew / 2 + "px";
				dom.style.top = winH / 2 - eh / 2 + "px";
			}
			$(".time").click(function() {
				$(".mask").css("display", "none");
				$(".approval_pop").css("display", "none");
				$(".form-control").val("");
			});

			$(".email_padlock").click(function() {
				$(".mask").css("display", "none");
				$(".approval_pop").css("display", "none");
				$(".form-control").val("");
			});

			
			$('#pending_approval').bootstrapTable({
//				url: "/user",
				pagination: false,
				paginationLoop: false,
				search: false, 
				columns: [{
					checkbox: false,
					visible: false
				}, {
					field: 'id',
					title: ' 编号'
				}, {
					field: 'corporate_name',
					title: '公司名称'
				}, {
					field: 'applicant',
					title: ' 申请人'
				}, {
					field: 'product_trial_time',
					title: '产品试用时间'
				}, {
					field: 'number_of_people',
					title: ' 扫描人数'
				}, {
					field: 'number',
					title: '并发扫描数'
				}, {
					field: 'remarks',
					title: '备注'
				}, {
					field: 'operation',
					title: '操作',
					formatter: operationFormatter
				}],
				data: [{
						"id": "1",
						"corporate_name": "上海端玛科技",
						"applicant": "XXX",
						"product_trial_time": "2019-11-29 09:39:36",
						"number_of_people": "3",
						"number": "3",
						"remarks": "..."
					}, 
					{
						"id": "1",
						"corporate_name": "上海端玛科技",
						"applicant": "XXX",
						"product_trial_time": "2019-11-29 09:39:36",
						"number_of_people": "3",
						"number": "3",
						"remarks": "..."
					}, {
						"id": "1",
						"corporate_name": "上海端玛科技",
						"applicant": "XXX",
						"product_trial_time": "2019-11-29 09:39:36",
						"number_of_people": "3",
						"number": "3",
						"remarks": "..."
					}, {
						"id": "1",
						"corporate_name": "上海端玛科技",
						"applicant": "XXX",
						"product_trial_time": "2019-11-29 09:39:36",
						"number_of_people": "3",
						"number": "3",
						"remarks": "..."
					}
				],
			});
			
			
			$('#approved').bootstrapTable({
//				url: "/user",
				pagination: false,
				paginationLoop: false,
				search: false, 
				columns: [{
					checkbox: false,
					visible: false
				}, {
					field: 'id',
					title: '编号'
				}, {
					field: 'corporate_name',
					title: '公司名称'
				}, {
					field: 'applicant',
					title: '申请人'
				}, {
					field: 'product_trial_time',
					title: '产品试用时间'
				}, {
					field: 'number_of_people',
					title: '扫描人数'
				}, {
					field: 'number',
					title: '并发扫描数'
				}, {
					field: 'remarks',
					title: '备注'
				}, {
					field: 'judge_man',
					title: '审批人',
				}],
				data: [{
						"id": "1",
						"corporate_name": "上海端玛科技",
						"applicant": "XXX",
						"product_trial_time": "2019-11-29 09:39:36",
						"number_of_people": "3",
						"number": "3",
						"remarks": "...",
						"judge_man":"XXX"
					}, 
					{
						"id": "1",
						"corporate_name": "上海端玛科技",
						"applicant": "XXX",
						"product_trial_time": "2019-11-29 09:39:36",
						"number_of_people": "3",
						"number": "3",
						"remarks": "...",
						"judge_man":"XXX"
					}, {
						"id": "1",
						"corporate_name": "上海端玛科技",
						"applicant": "XXX",
						"product_trial_time": "2019-11-29 09:39:36",
						"number_of_people": "3",
						"number": "3",
						"remarks": "...",
						"judge_man":"XXX"
					}, {
						"id": "1",
						"corporate_name": "上海端玛科技",
						"applicant": "XXX",
						"product_trial_time": "2019-11-29 09:39:36",
						"number_of_people": "3",
						"number": "3",
						"remarks": "...",
						"judge_man":"XXX"
					}
				],
			});