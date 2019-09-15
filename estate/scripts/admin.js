$(document).ready(function(){
    var once_clicked = false;
    $("#toggle-my-menu").on("click",function(){
        if(!once_clicked)
        {
            console.log("if");
            once_clicked = true;
            $("#menu").addClass("d-none");
            $("#content").removeClass("col-10");            
            $("#content").addClass("col-12");            
            $(this).css("transform","translateX(-45px)");
            
            
        }
        else
        {
            console.log("else");
            once_clicked = false;
            $("#menu").removeClass("d-none");
            $("#content").removeClass("col-12");
            $("#content").addClass("col-10");
            $(this).css("transform","translateX(-25px)");
        
        }
    });

    var h1 = {
		"hid": 1,
		"uid": 2,
		"cid": 3,
		"address": "B-2039, Lorem, Epsum",
		"lat": 51.359657,
		"long": 12.968053,
		"year_bulit": 2000,
		"user_price": 19000,
		"bathroom": 5,
		"bedroom": 5,
		"kitchen": 2,
		"type": "row house",
		"stories": 2,
		"plot": 1334.12,
		"overview": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore beatae dolore, iusto magnam praesentium pariatur consectetur doloribus vero aperiam reiciendis ullam repudiandae, molestias dignissimos ad amet rerum, labore adipisci distinctio.",
		"g_amenities_list": [
			"Balcony or deck",
			"Hardwood"
		],
		"b_amenities_list": [
			"garage",
			"cooling",
			"swimming",
			"elevator",
			"indoor_game",
			"hardwood_floor",
			"furnished",
			"balcony",
		],
		"sales_rent": 1,
		"view": 123,
		"day_web": 12,
		"photos": [
			"image/house/h1.jpg",
			"image/house/interior/h1-4.jpg",
			"image/house/interior/h1-5.jpg",
			"image/house/interior/h1-1.jpg",
		]
	};
	var h2 = {
		"hid": 20,
		"uid": 2,
		"cid": 3,
		"address": "B-1025, Lorem, SUrat",
		"lat": 26.359657,
		"long": 81.968053,
		"year_bulit": 1699,
		"user_price": 15500,
		"bathroom": 2,
		"bedroom": 3,
		"kitchen": 1,
		"type": "Flat",
		"stories": 11,
		"plot": 129.12,
		"overview": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore beatae dolore, iusto magnam praesentium pariatur consectetur doloribus vero aperiam reiciendis ullam repudiandae, molestias dignissimos ad amet rerum, labore adipisci distinctio.",
		"g_amenities_list": [
			"Balcony or deck",
			"Hardwood"
		],
		"b_amenities_list": [
			"garage",
			"swimming",
			"pet",
			"gym",
			"elevator",
		],
		"sales_rent": 1,
		"view": 10,
		"day_web": 23,
		"photos": [
			"image/house/h2.jpg",
			"image/house/interior/h1-1.jpg",
			"image/house/interior/h1-2.jpg",
			"image/house/interior/h1-1.jpg",
		]
	};
	var h3 = {
		"hid": 17,
		"uid": 2,
		"cid": 3,
		"address": "B-1025, Lorem, SUrat",
		"lat": 95.359657,
		"long": 42.968053,
		"year_bulit": 1699,
		"user_price": 15000.00,
		"bathroom": 1,
		"bedroom": 1,
		"kitchen": 4,
		"type": "Flat",
		"stories": 10,
		"plot": 159.12,
		"overview": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore beatae dolore, iusto magnam praesentium pariatur consectetur doloribus vero aperiam reiciendis ullam repudiandae, molestias dignissimos ad amet rerum, labore adipisci distinctio.",
		"g_amenities_list": [
			"Balcony or deck",
			"Hardwood"
		],
		"b_amenities_list": [
			"garage",
			"swimming",
			"pet",
			"gym",
			"elevator",
		],
		"sales_rent": 1,
		"view": 145,
		"day_web": 50,
		"photos": [
			"image/house/h3.jpg",
			"image/house/interior/h1-3.jpg",
			"image/house/interior/h1-4.jpg",
			"image/house/interior/h1-1.jpg",
		]
	};
	var h4 = {
		"hid": 4,
		"uid": 2,
		"cid": 3,
		"address": "B-1025, Lorem, SUrat",
		"lat": 15.359657,
		"long": 42.968053,
		"year_bulit": 1699,
		"user_price": 1205.00,
		"bathroom": 2,
		"bedroom": 5,
		"kitchen": 1,
		"type": "Flat",
		"stories": 10,
		"plot": 159.12,
		"overview": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore beatae dolore, iusto magnam praesentium pariatur consectetur doloribus vero aperiam reiciendis ullam repudiandae, molestias dignissimos ad amet rerum, labore adipisci distinctio.",
		"g_amenities_list": [
			"Balcony or deck",
			"Hardwood"
		],
		"b_amenities_list": [
			"garage",
			"swimming",
			"pet",
			"gym",
			"elevator",
		],
		"sales_rent": 1,
		"view": 200,
		"day_web": 50,
		"photos": [
			"image/house/h4.jpg",
			"image/house/interior/h1-5.jpg",
			"image/house/interior/h1-6.jpg",
			"image/house/interior/h1-7.jpg",
		]
	};
	var h5 = {
		"hid": 5,
		"uid": 2,
		"cid": 3,
		"address": "B-1025, Lorem, SUrat",
		"lat": 15.359657,
		"long": 42.968053,
		"year_bulit": 2015,
		"user_price": 55000.00,
		"bathroom": 5,
		"bedroom": 5,
		"kitchen": 2,
		"type": "Flat",
		"stories": 10,
		"plot": 159.12,
		"overview": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore beatae dolore, iusto magnam praesentium pariatur consectetur doloribus vero aperiam reiciendis ullam repudiandae, molestias dignissimos ad amet rerum, labore adipisci distinctio.",
		"g_amenities_list": [
			"Balcony or deck",
			"Hardwood"
		],
		"b_amenities_list": [
			"garage",
			"swimming",
			"pet",
			"gym",
			"elevator",
		],
		"sales_rent": 1,
		"view": 145,
		"day_web": 50,
		"photos": [
			"image/house/h5.jpg",
			"image/house/interior/h1-2.jpg",
			"image/house/interior/h1-4.jpg",
			"image/house/interior/h1-5.jpg",
		]
	};
	var base_house = h1;
	var content =
		'<div id="' + base_house["hid"] + '" onclick="house_click(this)" class="card p-2">'
		+ '<img class="card-img-top" src="' + base_house["photos"][0] + '" alt="Card image cap">'
		+ '<div class="card-body">'
		+ '<div class="row">'
		+ '<div class="col-5">'
		+ '<h5 data-type="currency">$' + base_house["user_price"] + '</h5>'
		+ '</div>'
		+ '<div class="col-7">'
		+ '<div class="row">'
		+ '<div class="col-12">'
		+ '<h6>' + base_house["bedroom"] + ' Bds|' + base_house["bathroom"] + ' Ba| ' + base_house["plot"] + 'ft</h6>'
		+ '<small>' + base_house["address"] + '</small>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>';
	$("#list_of_house").append(content);
	base_house = h2;
	content =
		'<div id="' + base_house["hid"] + '" onclick="house_click(this)" class="card p-2">'
		+ '<img class="card-img-top" src="' + base_house["photos"][0] + '" alt="Card image cap">'
		+ '<div class="card-body">'
		+ '<div class="row">'
		+ '<div class="col-5">'
		+ '<h5 data-type="currency">$' + base_house["user_price"] + '</h5>'
		+ '</div>'
		+ '<div class="col-7">'
		+ '<div class="row">'
		+ '<div class="col-12">'
		+ '<h6>' + base_house["bedroom"] + ' Bds|' + base_house["bathroom"] + ' Ba| ' + base_house["plot"] + 'ft</h6>'
		+ '<small>' + base_house["address"] + '</small>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>';
	$("#list_of_house").append(content);
	base_house = h3;
	content =
		'<div id="' + base_house["hid"] + '" onclick="house_click(this)" class="card p-2">'
		+ '<img class="card-img-top" src="' + base_house["photos"][0] + '" alt="Card image cap">'
		+ '<div class="card-body">'
		+ '<div class="row">'
		+ '<div class="col-5">'
		+ '<h5 data-type="currency">$' + base_house["user_price"] + '</h5>'
		+ '</div>'
		+ '<div class="col-7">'
		+ '<div class="row">'
		+ '<div class="col-12">'
		+ '<h6>' + base_house["bedroom"] + ' Bds|' + base_house["bathroom"] + ' Ba| ' + base_house["plot"] + 'ft</h6>'
		+ '<small>' + base_house["address"] + '</small>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>';
	$("#list_of_house").append(content);
	base_house = h4;
	content =
		'<div id="' + base_house["hid"] + '" onclick="house_click(this)" class="card p-2">'
		+ '<img class="card-img-top" src="' + base_house["photos"][0] + '" alt="Card image cap">'
		+ '<div class="card-body">'
		+ '<div class="row">'
		+ '<div class="col-5">'
		+ '<h5 data-type="currency">$' + base_house["user_price"] + '</h5>'
		+ '</div>'
		+ '<div class="col-7">'
		+ '<div class="row">'
		+ '<div class="col-12">'
		+ '<h6>' + base_house["bedroom"] + ' Bds|' + base_house["bathroom"] + ' Ba| ' + base_house["plot"] + 'ft</h6>'
		+ '<small>' + base_house["address"] + '</small>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>';
	$("#list_of_house").append(content);
	base_house = h5;
	content =
		'<div id="' + base_house["hid"] + '" onclick="house_click(this)" class="card p-2">'
		+ '<img class="card-img-top" src="' + base_house["photos"][0] + '" alt="Card image cap">'
		+ '<div class="card-body">'
		+ '<div class="row">'
		+ '<div class="col-5">'
		+ '<h5 data-type="currency">$' + base_house["user_price"] + '</h5>'
		+ '</div>'
		+ '<div class="col-7">'
		+ '<div class="row">'
		+ '<div class="col-12">'
		+ '<h6>' + base_house["bedroom"] + ' Bds|' + base_house["bathroom"] + ' Ba| ' + base_house["plot"] + 'ft</h6>'
		+ '<small>' + base_house["address"] + '</small>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>';
	$("#list_of_house").append(content);


});