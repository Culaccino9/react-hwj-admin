const express = require('express')
const router = express.Router()

const conn = require('./db/conn')


/* 获取订单列表 && 带查询功能 */
router.get('/list', (req, res) => {
	let { currentPage, pageSize, orderNo, consignee, phone, orderState, date } = req.query;
	pageSize = pageSize ? pageSize : '';
	orderNo = orderNo ? orderNo : '';
	consignee = consignee ? consignee : '';
	phone = phone ? phone : '';
	orderState = orderState ? orderState : '';
	date = date ? date : [];

	if (!(currentPage && pageSize)) {
		res.send({ code: 5001, msg: "参数错误!" })
		return;
	}

	let sql = `select * from orders where 1 = 1`;

	if (orderNo) {
		sql += ` and orderNo like "%${orderNo}%"`;
	}

	if (consignee) {
		sql += ` and consignee like "%${consignee}%"`
	}

	if (phone) {
		sql += ` and phone like "%${phone}%"`
	}

	if (orderState) {
		sql += ` and orderState = "${orderState}"`
	}

	date = Array.isArray(date) ? [] : JSON.parse(date)
	if (date.length) {
		sql += ` and orderTime between "${date[0]}" and "${date[1]}"`
	}

	sql += ` order by orderTime desc`;

	let total;
	conn.query(sql, (err, data) => {
		if (err) throw err;
		total = data.length;

		let n = (currentPage - 1) * pageSize;
		sql += ` limit ${n}, ${pageSize}`;

		conn.query(sql, (err, data) => {
			if (err) throw err;
			res.send({
				total,
				data
			})
		})
	})
})

/**
 * 查询
 */
router.get('/search', (req, res) => {
	let { currentPage, pageSize, orderNo, consignee, phone, orderState, date } = req.query;
	pageSize = pageSize ? pageSize : '';
	orderNo = orderNo ? orderNo : '';
	consignee = consignee ? consignee : '';
	phone = phone ? phone : '';
	orderState = orderState ? orderState : '';
	date = date ? date : [];

	if (!(currentPage && pageSize)) {
		res.send({ code: 5001, msg: "参数错误!" })
		return;
	}

	let sql = `select * from orders where 1 = 1`;

	if (orderNo) {
		sql += ` and orderNo like "%${orderNo}%"`;
	}

	if (consignee) {
		sql += ` and consignee like "%${consignee}%"`
	}

	if (phone) {
		sql += ` and phone like "%${phone}%"`
	}

	if (orderState) {
		sql += ` and orderState = "${orderState}"`
	}

	date = Array.isArray(date) ? [] : JSON.parse(date)
	if (date.length) {
		sql += ` and orderTime between "${date[0]}" and "${date[1]}"`
	}

	sql += ` order by orderTime desc`;

	let total;
	conn.query(sql, (err, data) => {
		if (err) throw err;
		total = data.length;

		let n = (currentPage - 1) * pageSize;
		sql += ` limit ${n}, ${pageSize}`;

		conn.query(sql, (err, data) => {
			if (err) throw err;
			res.send({
				total,
				data
			})
		})
	})
})

/* 获取订单详情 */
router.get('/detail', (req, res) => {
	let { id } = req.query;

	if (!id) {
		res.send({ code: 5001, msg: '参数错误!' })
		return
	}

	const sql = `select * from orders where id=${id}`;
	conn.query(sql, (err, data) => {
		if (err) throw err;
		res.send({ data: data[0] })
	})
})

/* 保存修改 */
router.post('/edit', (req, res) => {
	let { orderNo, orderTime, phone, consignee, deliverAddress, deliveryTime, remarks, orderAmount, orderState, id } = req.body;

	if (!(orderNo && orderTime && phone && consignee && deliverAddress && deliveryTime && remarks && orderAmount && orderState)) {
		res.send({ code: 5001, msg: "参数错误!" })
		return;
	}

	const sql = `update orders set orderNo="${orderNo}", orderTime="${orderTime}", phone="${phone}", consignee="${consignee}", 
	deliverAddress="${deliverAddress}", deliveryTime="${deliveryTime}", remarks="${remarks}", orderAmount="${orderAmount}", 
	orderState="${orderState}" where id=${id}`;


	conn.query(sql, (err, data) => {
		if (err) throw err;
		if (data.affectedRows > 0) {
			res.send({
				code: 0,
				msg: '修改订单成功!'
			})
		} else {
			res.send({
				code: 1,
				msg: '修改订单失败!'
			})
		}
	})
})

/* 首页数据统计接口 */
router.get('/totaldata', (req, res) => {
	const getDateStr=(AddDayCount) =>{
         var dd = new Date();
         dd.setDate(dd.getDate() + AddDayCount);   //获取AddDayCount天后的日期
         var year = dd.getFullYear();
         var mon = dd.getMonth()+1;//获取当前月份的日期
         var day = dd.getDate();
         return year + '-' + ( mon < 10 ? ( '0' + mon ) : mon ) + '-' + ( day < 10 ? ( '0' + day ) : day) ;
	}
	let d =new Date();
	let y=d.getFullYear();
	let m=d.getMonth()+1;
	let dy=d.getDate();
	
	let day7=getDateStr(-6);
	let day6=getDateStr(-5);
	let day5=getDateStr(-4);
	let day4=getDateStr(-3);
	let day3=getDateStr(-2);
	let day2=getDateStr(-1);
	let day1=getDateStr(0);
	
	
	console.log(day7)
	res.send({
		totalOrder: 5486,
		totalAmount: 202466,
		todayOrder: 189,
		totayAmount: 2189,
		xData: [day7,day6,day5,day4,day3,day2,day1],
		orderData: [120, 132, 101, 134, 90, 230, 210],
		amountData: [220, 282, 191, 234, 290, 330, 310]
	})
})

/* 订单统计 */
router.get('/ordertotal', (req, res) => {
	let { date } = req.query;
	let sql = `select orderTime, orderAmount from orders`;

	if (date && date.length) {
		date = JSON.parse(date);
		sql += ` orders where orderTime between "${date[0]}" and "${date[1]}"`;
	}
	conn.query(sql, (err, data) => {
		if (err) throw err;
		res.send({ data });
	})
})

module.exports = router;