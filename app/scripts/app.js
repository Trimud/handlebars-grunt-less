$(document).ready(function() {

    (function(window, $, Handlebars) {

        var formData = {
            person: {
                title: 'mr',
                name: '',
                surname: '',
                username: '',
                email: '',
                telephone: '',
                birthdate: '',
                food: 'pasta',
                employed: 'yes',
                drinksBeer: 'yes',
                bio: '',
                projects: ''
            },
            errors: false,
            submitted: false,
            titles: [{
                value: 'mr',
                text: 'Г-н'
            }, {
                value: 'mrs',
                text: 'Г-жа'
            }],
            foods: [{
                value: 'pasta',
                text: 'Паста'
            },{
                value: 'pizza',
                text: 'Пица'
            }, {
                value: 'fruit',
                text: 'Плодове'
            }]
        };

        var Form = {
            init: function() {
                this.data = formData;
                this.compile();
                this.render();
                this.bindEvents();
            },
            bindEvents: function() {
                $('#formContainer').on('submit', $.proxy(this.onFormSubmit, this));
            },
            compile: function() {

                // Register the form helpers
                HandlebarsFormHelpers.register(Handlebars, {
                    validationErrorClass: 'errorValidation'
                });

            },
            render: function() {
                $('#formContainer').html(JST["app/templates/hbform.hbs"](this.data));
            },
            onFormSubmit: function(e) {

                e.preventDefault();

                this.data.submitted = true;

                // Update the person model with user input data
                this.data.person = $(e.target).serializeArray();

                // Re-render the template
                this.render();

                $('.errorValidation:first').parents('fieldset').addClass('active');
                $('.errorValidation:first').focus();

                // Hide the form as now we have to show the submitted data
                $('#multipage').hide();

                // Print form submission
                if ( $('#multipage').valid() ) {
                    var i, 
                        s, 
                        len = this.data.person.length;

                    $('#formData').empty();
                    for (i=0; i<len; ++i) {
                        if (i in this.data.person) {
                            s = this.data.person[i];
                            $('#formData').append('<div class="formRow"><label>' + s.name + ': ' + s.value + '</label></div>');
                        }
                    }
                }

            }
        };
        Form.init();
    }(this, jQuery, Handlebars));

    // Cache form selectors
    var $multiForm      = $('#multipage');
    var $birthdate      = $multiForm.find('input#birthdate');
    var $nameField      = $multiForm.find('input#name');
    var $userNameField  = $multiForm.find('input#username');
    var $emailField     = $multiForm.find('input#email');
    var $phoneField     = $multiForm.find('input#telephone');
    var $bioField       = $multiForm.find('textarea#bio');

    // Check if there is a form on the page
    if ( $multiForm.length && $multiForm.is(':visible') ) {

        // Multi Page Form
        (function multiForm(){
            $multiForm.multipage({
                activeDot: '',
                inactiveDot: '',
                transitionFunction: function(from,to) {
                    // We need to update the calendar icon position
                    // because it is not visible initially
                    if ( $(to).is('#step3') ) {

                        // We need setTimeout because the transitionFunction
                        // is firing on click of the next button and the 
                        // datePicker input is not visible yet
                        setTimeout(function(){
                            var datepicker = $birthdate.data('Zebra_DatePicker');
                            datepicker.update();
                        }, 50);

                    }
                }
            });
        })();

        // Date Picker field selector
        $birthdate.Zebra_DatePicker({
            direction: false,
            format: 'd/m/Y'
        });

        // Username Validate RegEx
        $.validator.addMethod('userName', function(value, element) {
            return this.optional(element) || /^[a-z0-9\-]+$/i.test(value);
        },'Login format not valid');

        // Phone Number Validate RegEx
        $.validator.addMethod('phoneBG', function(value, element) {
            return this.optional(element) || /^08[7-9][0-9]{7}$/.test(value);
        }, "Please specify a valid phone number");

        // E-mal Validate RegEx
        $.validator.addMethod('email', function(value, element) {
            var pattern = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
            return this.optional(element) || pattern.test(value);
        }, "Моля използвайте валиден е-мейл формат!");

        // Form Validation
        $multiForm.validate({
            errorClass: 'errorMessage',
            errorElement: "div",
            highlight: function(element) {
                $(element).parents('.formRow').addClass("formError");
            },
            unhighlight: function(element) {
                $(element).parents('.formRow').removeClass("formError");
            }
        });

        // We need to add custom rules for each field,
        // beacuse jQuery Validation plugin is working
        // with 'name' attribute and it is in Bulgarian

        // First Name Validation
        $nameField.rules('add', {
            required: true,
            messages: {
                required: "Моля въведете валидно име!"
            }
        });
        // Username Validation
        $userNameField.rules('add', {
            required: true,
            userName: true,
            minlength: 4,
            messages: {
                required:  'Моля въведете валидно потребителско име!',
                userName:  'Потребителското име може да съдържа само латински букви, цифри или тирета.',
                minlength: 'Минималната дължина на полето е 4 символа'
            }
        });
        // E-mail Validation
        $emailField.rules('add', {
            required: true,
            email: true,
            messages: {
                required: 'Моля въведете валиден е-мейл!',
                email: 'Моля използвайте валиден е-мейл формат!'
            }
        });
        // Phone Number Validation
        $phoneField.rules('add', {
            required: true,
            phoneBG: true,
            messages: {
                required: 'Моля въведете телефонен номер!',
                phoneBG: 'Моля използвайте валиден формат: 08********!'
            }
        });
        // Biography Validation
        $bioField.rules('add', {
            required: true,
            messages: {
                required: "Моля попълнете полето!"
            }
        });


        var $multiFormPrev = $('.multipage_back');
        var $multiFormNext = $('.multipage_next');

        $multiFormNext.on('click', function(e) {
            e.preventDefault();

            // Next Page link if form is valid.
            // Otherwise show errors
            if ( $multiForm.valid() ) {
                $multiForm.nextpage();
            }
        });
        $multiFormPrev.on('click', function(e) {
            e.preventDefault();

            // Prev Page is always active.
            // No need to do form validation here.
            $multiForm.prevpage();
        });

    }

}); 