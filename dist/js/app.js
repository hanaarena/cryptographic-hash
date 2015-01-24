'use strict';

var length = '', hash_hmac = '';

var html = '<div class="alert alert-info result-content" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>';

/* each ok btn */
$('.hash-calculate').each(function() {
	$(this).click(function() {	
			//alert($(this).prev().children('input').attr('id'));
			var selector = $(this).prev().children('input').attr('id');
			check($(this).prev().children('input').val(), selector);
	});
});

$('.hash-hmac-calculate').click(function() {
	$('.result').html('');
	var data = $('#hash_hmac-data').val(),
		key = $('#hash_hmac-key').val();
	if(data == '' || key == '') {
		alert('data or key must have a value');
		$('#hash_hmac-data').focus();
	} else {
		hash_hmac = CryptoJS.HmacSHA1(data, key);
		$('.result').append(html + '<strong>hash_hmac in javascript: </strong><p>' + CryptoJS.HmacSHA1(data, key) + '</p></div>');
	}
});

$('.raw-binary').click(function() {
	$('.result').html('');
	$('.result').append(html + '<strong>hash_hmac in javascript(Raw binary): </strong><p>' + hash_hmac.toString(CryptoJS.enc.Latin1) + '</p></div>');
});

$('#sha-3').focus(function() {
	length = '512';
});

/* input value check */
function check(value, selector) {
	if(value == '' || value == null) {
		alert("value must not null");
		$('#'+selector).focus();
		//console.log(selector);
	} else {
		$('.result').html('');
		if(selector == 'sha-1') {
			$('.result').append(html + '<strong>' + selector.toUpperCase() + ': </strong><p>' + CryptoJS.SHA1($('#'+selector).val()) + '</p></div>');
		} else if(selector == 'sha-256') {
			$('.result').append(html + '<strong>' + selector.toUpperCase() + ': </strong><p>' + CryptoJS.SHA256($('#'+selector).val()) + '</p></div>');
		} else if(selector == 'sha-512') {
			$('.result').append(html + '<strong>' + selector.toUpperCase() + ': </strong><p>' + CryptoJS.SHA512($('#'+selector).val()) + '</p></div>');
		} else if(selector == 'sha-3') {
			if(length == '512') {
				$('.result').append(html + '<strong>' + selector.toUpperCase() + ': </strong><p>' + CryptoJS.SHA3($('#'+selector).val()) + '</p></div>');
			} else {
				$('.result').append(html + '<strong>' + selector.toUpperCase() + '(length:' + length + '): </strong><p>' + CryptoJS.SHA3($('#'+selector).val(), { outputLength: length }) + '</p></div>');
			}
		}
	}
}

/* different length of SHA-3  */
function selectLength(leng) {
	length = leng;
}