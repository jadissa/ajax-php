// Gets URL parameters
function getUrlParams()
{
    var match,
        pl     = /\+/g,
        search = /([^&=]+)=?([^&]*)/g,
        decode = function(s){ return decodeURIComponent(s.replace(pl, " "));},
        query  = window.location.search.substring(1);

    var urlParams = {};
    while (match = search.exec(query))
    {
        urlParams[decode(match[1])] = decode(match[2]);
    }
    return urlParams;
}

// Checks if var empty
function isEmpty(variable)
{
    if ((variable == 'undefined') || (variable == '') || (variable == null) || (variable == 'null'))
    {
        return true;
    }
    return false;
}

// Merge two arrays w/o dupes
function mergeArrays(a, b)
{
    var hash = {};
    return a.concat(b).filter(function (val)
    {
        return hash[val] ? 0 : hash[val] = 1;
    });
}

// Converts object to array
function toArray(variable)
{
    var array = $.map(variable, function(value, index)
    {
        return [value];
    });
    return array;
}

// Converts jQuery.serializeArray data to assoc
function serialAssoc(serialized_array)
{
    var array = {};
    $.each(serialized_array, function(i, input)
    {
        if (isEmpty(input)) return true;
        if (input.name && input.value)
        {
            array[input.name] = input.value;
        }
        else
        {
            array[i] = input;
        }
    });
    return array;
}

// Checks if var is of type array
function isArray(variable)
{
    return Object.prototype.toString.call(variable) === '[object Array]';
}

// Checks for the existence of needle in haystack
function inArray(needle, haystack)
{
    return haystack.indexOf(needle) > -1;
}

// Checks arrays for equality, returns diff
Array.prototype.arrayDiff = function(a)
{
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

function numberWithCommas(x)
{
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

// Formats money
Number.prototype.formatMoney = function(c, d, t)
{
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

// Gets string between two characters
function getStringBetween(begin_char, end_char, string)
{
    return string.substring(string.lastIndexOf(begin_char) + 1, string.lastIndexOf(end_char));
}

$.fn.serializeFormJSON = function () {

    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

// Truncates a string s.trunc(5);
String.prototype.trunc = String.prototype.trunc ||
    function(n){
        return this.length>n ? this.substr(0,n-1)+'<a href="javascript:void(0);" name="' + this + '" class="title_expand">&hellip;</a>' : this;
    };