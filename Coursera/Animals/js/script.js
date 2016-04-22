var categories_template, animals_template, animal_template

current_category = animals_data.category[0];
current_animals = current_category.animals[0];
current_animal = current_category.animals[0];


function showTemplate(template, data) {
	var html = template(data);
	$("#content").html(html);
}

$(document).ready(function(){
	var source = $("#categories-template").html();
	categories_template = Handlebars.compile(source);

	var source = $("#animals-template").html();
	animals_template = Handlebars.compile(source);

	var source = $("#animal-template").html();
	animal_template = Handlebars.compile(source);

	$("#categories-tab").click(function(){
		showTemplate(categories_template, animals_data);
		$(".nav-tabs .active").removeClass("active");
		$("#categories-tab").addClass("active");

		$(".categories-thumbnail").click(function(){
			var index = $(this).data("id");
			current_category = animals_data.category[index];

			showTemplate(animals_template, current_category);

			$(".animals-thumbnail").click(function(){
				var index = $(this).data("id");
				current_animal = current_category.animals[index];

				showTemplate(animal_template, current_animal);

			});
		});
	});

	$('#animals-tab').click(function(){
		showTemplate(animals_template, current_category);
		$(".nav-tabs .active").removeClass("active");
		$("#animals-tab").addClass("active");

		$('.animals-thumbnail').click(function(){
			var index = $(this).data("id");
			current_animal = current_category.animals[index];
			showTemplate(animal_template, current_animal);

		});
	});

	$("#categories-tab").click();
});