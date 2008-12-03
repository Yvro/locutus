/* 
 * More info at: http://kevin.vanzonneveld.net/techblog/article/phpjs_licensing/
 * 
 * This is version: 1.87
 * php.js is copyright 2008 Kevin van Zonneveld.
 * 
 * Portions copyright Onno Marsman, Michael White (http://getsprink.com),
 * Waldo Malqui Silva, Jack, Jonas Raoni Soares Silva
 * (http://www.jsfromhell.com), Philip Peterson, Legaev Andrey, Ates Goral
 * (http://magnetiq.com), Paulo Ricardo F. Santos, Martijn Wieringa, Brett
 * Zamir, Enrique Gonzalez, Nate, Philippe Baumann, Webtoolkit.info
 * (http://www.webtoolkit.info/), Carlos R. L. Rodrigues
 * (http://www.jsfromhell.com), Jani Hartikainen, Ash Searle
 * (http://hexmen.com/blog/), Erkekjetter, GeekFG
 * (http://geekfg.blogspot.com), Johnny Mast (http://www.phpvrouwen.nl), d3x,
 * marrtins, AJ, Alex, Alfonso Jimenez (http://www.alfonsojimenez.com), Aman
 * Gupta, Arpad Ray (mailto:arpad@php.net), Karol Kowalski, Mirek Slugen,
 * Sakimori, Thunder.m, Tyler Akins (http://rumkin.com), mdsjack
 * (http://www.mdsjack.bo.it), 0m3r, Alexander Ermolaev
 * (http://snippets.dzone.com/user/AlexanderErmolaev), Allan Jensen
 * (http://www.winternet.no), Andrea Giammarchi
 * (http://webreflection.blogspot.com), Andreas, Andrej Pavlovic, Anton
 * Ongson, Arno, Atli Þór, Bayron Guevara, Ben Bryan, Benjamin Lupton, Brad
 * Touesnard, Cagri Ekin, Christian Doebler, Cord, David, David James, Dino,
 * DxGx, FGFEmperor, Felix Geisendoerfer (http://www.debuggable.com/felix),
 * Francesco, Francois, FremyCompany, Gabriel Paderni, Howard Yeend, J A R,
 * Kirk Strobeck, LH, Leslie Hoare, Lincoln Ramsay, Linuxworld, Luke Godfrey,
 * Manish, Marc Palau, Mateusz "loonquawl" Zalega, MeEtc
 * (http://yass.meetcweb.com), Mick@el, Nathan, Nick Callen, Norman "zEh"
 * Fuchs, Ozh, Pedro Tainha (http://www.pedrotainha.com), Peter-Paul Koch
 * (http://www.quirksmode.org/js/beat.html), Pul, Pyerre, ReverseSyntax,
 * Robin, Sanjoy Roy, Saulo Vallory, Scott Cariss, Simon Willison
 * (http://simonwillison.net), Slawomir Kaniecki, Steve Clay, Steve Hilder,
 * Steven Levithan (http://blog.stevenlevithan.com), Subhasis Deb, T.Wild,
 * T0bsn, Thiago Mata (http://thiagomata.blog.com), Tim Wiel, Tod Gentille,
 * XoraX (http://www.xorax.info), Yannoo, Yves Sucaet, baris ozdil, booeyOH,
 * djmix, dptr1988, duncan, echo is bad, gabriel paderni, ger, gorthaur,
 * hitwork, jakes, john (http://www.jd-tech.net), johnrembo, kenneth, marc
 * andreu, metjay, nobbler, noname, penutbutterjelly, sankai, sowberry, stensi
 * 
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES
 * OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */ 

(function() {
    if(typeof(PHP_JS) == "undefined"){
        var PHP_JS = function() {
            if(window == this || !this.init){
                return new PHP_JS();
            }else{
                return this.init();
            }
        };
    }
    
    PHP_JS.prototype = {
        // {{{ init: 
        init: function() {
            // Makes autoloading system works properly.
            // 
            // %        note 1: Not a real PHP.JS function, necessary for namespaced version, though.
        
        },// }}}
        
        // {{{ array
        array: function( ) {
            // #!#!#!#!# array::$descr1 does not contain valid 'array' at line 260
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array/
            // +       version: 809.522
            // +   original by: d3x
            // *     example 1: $P.array('Kevin', 'van', 'Zonneveld');
            // *     returns 1: ['Kevin', 'van', 'Zonneveld']
        
            return Array.prototype.slice.call(arguments);
        },// }}}
        
        // {{{ array_change_key_case
        array_change_key_case: function( array ) {
            // Changes all keys in an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_change_key_case/
            // +       version: 809.522
            // +   original by: Ates Goral (http://magnetiq.com)
            // +   improved by: marrtins
            // *     example 1: $P.array_change_key_case(42);
            // *     returns 1: false
            // *     example 2: $P.array_change_key_case([ 3, 5 ]);
            // *     returns 2: {0: 3, 1: 5}
            // *     example 3: $P.array_change_key_case({ FuBaR: 42 });
            // *     returns 3: {"fubar": 42}
            // *     example 4: $P.array_change_key_case({ FuBaR: 42 }, 'CASE_LOWER');
            // *     returns 4: {"fubar": 42}
            // *     example 5: $P.array_change_key_case({ FuBaR: 42 }, 'CASE_UPPER');
            // *     returns 5: {"FUBAR": 42}
            // *     example 6: $P.array_change_key_case({ FuBaR: 42 }, 2);
            // *     returns 6: {"FUBAR": 42}
        
            var case_fn, tmp_ar = new Object, argc = arguments.length, argv = arguments, key;
        
            if (array instanceof Array) {
                return array;
            }
        
            if (array instanceof Object) {
                if( argc == 1 || argv[1] == 'CASE_LOWER' || argv[1] == 0 ){
                    case_fn = "toLowerCase";
                } else{
                    case_fn = "toUpperCase";
                }
                for (var key in array) {
                    tmp_ar[key[case_fn]()] = array[key];
                }
                return tmp_ar;
            }
        
            return false;
        },// }}}
        
        // {{{ array_chunk
        array_chunk: function( input, size ) {
            // Split an array into chunks
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_chunk/
            // +       version: 809.522
            // +   original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
            // *     example 1: $P.array_chunk(['Kevin', 'van', 'Zonneveld'], 2);
            // *     returns 1: {0 : {0: 'Kevin', 1: 'van'} , 1 : {0: 'Zonneveld'}}
         
            for(var x, i = 0, c = -1, l = input.length, n = []; i < l; i++){
                (x = i % size) ? n[c][x] = input[i] : n[++c] = [input[i]];
            }
        
            return n;
        },// }}}
        
        // {{{ array_combine
        array_combine: function( keys, values ) {
            // Creates an array by using one array for keys and another for its values
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_combine/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.array_combine([0,1,2], ['kevin','van','zonneveld']);
            // *     returns 1: {0: 'kevin', 1: 'van', 2: 'zonneveld'}
           
            var new_array = {}, keycount=keys.length, i;
        
            // input sanitation
            if( !keys || !values || keys.constructor !== Array || values.constructor !== Array ){
                return false;
            }
        
            // number of elements does not match
            if(keycount != values.length){
                return false;
            }
        
            for ( i=0; i < keycount; i++ ){
                new_array[keys[i]] = values[i];
            }
        
            return new_array;
        },// }}}
        
        // {{{ array_count_values
        array_count_values: function( array ) {
            // Counts all the values of an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_count_values/
            // +       version: 810.2018
            // +   original by: Ates Goral (http://magnetiq.com)
            // + namespaced by: Michael White (http://getsprink.com)
            // +      input by: sankai
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.array_count_values([ 3, 5, 3, "foo", "bar", "foo" ]);
            // *     returns 1: {3:2, 5:1, "foo":2, "bar":1}
            // *     example 2: $P.array_count_values({ p1: 3, p2: 5, p3: 3, p4: "foo", p5: "bar", p6: "foo" });
            // *     returns 2: {3:2, 5:1, "foo":2, "bar":1}
            // *     example 3: $P.array_count_values([ true, 4.2, 42, "fubar" ]);
            // *     returns 3: {42:1, "fubar":1}
        
            var tmp_arr = {}, key = '', t = '';
            
            var __getType = function(obj) {
                // Objects are php associative arrays.
                var t = typeof obj;
                t = t.toLowerCase();
                if (t == "object") {
                    t = "array";
                }
                return t;
            }    
        
            var __countValue = function (value) {
                switch (typeof(value)) {
                    case "number":
                        if (Math.floor(value) != value) {
                            return;
                        }
                    case "string":
                        if (value in this) {
                            ++this[value];
                        } else {
                            this[value] = 1;
                        }
                }
            };
            
            t = __getType(array);
            if (t == 'array') {
                for ( key in array ) {
                    __countValue.call(tmp_arr, array[key]);
                }
            } 
            return tmp_arr;
        },// }}}
        
        // {{{ array_diff
        array_diff: function (array) {
            // Computes the difference of arrays
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_diff/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Sanjoy Roy
            // *     example 1: $P.array_diff(['Kevin', 'van', 'Zonneveld'], ['van', 'Zonneveld']);
            // *     returns 1: ['Kevin']
        
            var arr_dif = [], i = 1, argc = arguments.length, argv = arguments, key, key_c, found=false, cntr=0;
        
            // loop through 1st array
            for ( key in array ){
                // loop over other arrays
                for (i = 1; i< argc; i++){
                    // find in the compare array
                    found = false;
                    for (key_c in argv[i]) {
                        if (argv[i][key_c] == array[key]) {
                            found = true;
                            break;
                        }
                    }
        
                    if(!found){
                        //arr_dif[key] = array[key];
                        arr_dif[cntr] = array[key];
                        cntr++;
                    }
                }
            }
        
            return arr_dif;
        },// }}}
        
        // {{{ array_diff_assoc
        array_diff_assoc: function ( array ) {
            // Computes the difference of arrays with additional index check
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_diff_assoc/
            // +       version: 812.114
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: 0m3r
            // *     example 1: $P.array_diff_assoc({0: 'Kevin', 1: 'van', 2: 'Zonneveld'}, {0: 'Kevin', 4: 'van', 5: 'Zonneveld'});
            // *     returns 1: {1: 'van', 2: 'Zonneveld'}
        
            var arr_dif = {}, i = 1, argc = arguments.length, argv = arguments, key, key_c, found=false;
        
            // input sanitation
            if( !array || (array.constructor !== Array && array.constructor !== Array && typeof array != 'object' && typeof array != 'array') ){
                return null;
            }
        
            // loop through 1st array
            for ( key in array ){
                // loop over other arrays
                for (i = 1; i< argc; i++){
                    // find in the compare array
                    found = false;
                    if(argv[i][key] && argv[i][key] == array[key]){
                        found = true;
                        break;
                    }
        
                    if(!found){
                        arr_dif[key] = array[key];
                    }
                }
            }
        
            return arr_dif;
        },// }}}
        
        // {{{ array_diff_key
        array_diff_key: function( object ) {
            // Computes the difference of arrays using keys for comparison
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_diff_key/
            // +       version: 809.522
            // +   original by: Ates Goral (http://magnetiq.com)
            // *     example 1: $P.array_diff_key({red: 1, green: 2, blue: 3, white: 4});
            // *     returns 1: {"red":1, "green":2, "blue":3, "white":4}
            // *     example 2: $P.array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5});
            // *     returns 2: {"green":2, "blue":3, "white":4}
            // *     example 3: $P.array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5}, {green: 6, blue: 7});
            // *     returns 3: {"white":4}
            // *     example 4: $P.array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5}, {red: 5});
            // *     returns 4: {"green":2, "blue":3, "white":4}
        
            var tpm_ar = new Object(), argc = arguments.length, argv = arguments, key, argidx, other;
        
            for (key in object) {
                tpm_ar[key] = object[key];
            }
            for (argidx = 1; argidx < argc; ++argidx) {
                other = argv[argidx];
        
                if (other instanceof Object) {
                    for (key in other) {
                        delete tpm_ar[key];
                    }
                }
            }
        
            return tpm_ar;
        },// }}}
        
        // {{{ array_fill
        array_fill: function( start_index, num, mixed_val ) {
            // Fill an array with values
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_fill/
            // +       version: 811.1314
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Waldo Malqui Silva
            // *     example 1: $P.array_fill(5, 6, 'banana');
            // *     returns 1: { 5: 'banana', 6: 'banana', 7: 'banana', 8: 'banana', 9: 'banana', 10: 'banana' }
        
            var key, tmp_arr = {};
        
            if ( !isNaN ( start_index ) && !isNaN ( num ) ) {
                for( key = 0; key < num; key++ ) {
                    tmp_arr[(key+start_index)] = mixed_val;
                }
            }
        
            return tmp_arr;
        },// }}}
        
        // {{{ array_fill_keys
        array_fill_keys: function (keys, value) {
            // Fill an array with values, specifying keys
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_fill_keys/
            // +       version: 811.2517
            // +   original by: Brett Zamir
            // +   bugfixed by: Brett Zamir
            // *     example 1: $P.keys = {'a': 'foo', 2: 5, 3: 10, 4: 'bar'}
            // *     example 1: $P.array_fill_keys(keys, 'banana')
            // *     returns 1: {"foo": "banana", 5: "banana", 10: "banana", "bar": "banana"}
            
            var retObj = {}, key = '';
            
            for (key in keys) {
                retObj[keys[key]] = value;
            }
            
            return retObj;
        },// }}}
        
        // {{{ array_filter
        array_filter: function (arr, func) {
            // Filters elements of an array using a callback function
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_filter/
            // +       version: 811.1812
            // +   original by: Brett Zamir
            // %        note 1: Takes a as: function an argument, not a function's name
            // *     example 1: $P.var odd = function (num) {return (num & 1);}; 
            // *     example 1: $P.array_filter({"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}, odd);
            // *     returns 1: {"a": 1, "c": 3, "e": 5}
            // *     example 2: $P.var even = function (num) {return (!(num & 1));}
            // *     example 2: $P.array_filter([6, 7, 8, 9, 10, 11, 12], even);
            // *     returns 2: {0: 6, 2: 8, 4: 10, 6: 12} 
            
            var retObj = {}, k;
            
            for (k in arr) {
                if (func(arr[k])) {
                    retObj[k] = arr[k];
                }
            }
            
            return retObj;
        },// }}}
        
        // {{{ array_flip
        array_flip: function( trans ) {
            // Exchanges all keys with their associated values in an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_flip/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.array_flip( {a: 1, b: 1, c: 2} );
            // *     returns 1: {1: 'b', 2: 'c'}
        
            var key, tmp_ar = {};
        
            for( key in trans ) {
                tmp_ar[trans[key]] = key;
            }
        
            return tmp_ar;
        },// }}}
        
        // {{{ array_key_exists
        array_key_exists: function ( key, search ) {
            // Checks if the given key or index exists in the array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_key_exists/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Felix Geisendoerfer (http://www.debuggable.com/felix)
            // *     example 1: $P.array_key_exists('kevin', {'kevin': 'van Zonneveld'});
            // *     returns 1: true
        
            // input sanitation
            if( !search || (search.constructor !== Array && search.constructor !== Object) ){
                return false;
            }
        
            return key in search;
        },// }}}
        
        // {{{ array_keys
        array_keys: function( input, search_value, strict ) {
            // Return all the keys of an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_keys/
            // +       version: 810.2018
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.array_keys( {firstname: 'Kevin', surname: 'van Zonneveld'} );
            // *     returns 1: {0: 'firstname', 1: 'surname'}
            
            var tmp_arr = {}, strict = !!strict, include = true, cnt = 0;
            
            for ( key in input ){
                include = true;
                if ( search_value != undefined ) {
                    if( strict && input[key] !== search_value ){
                        include = false;
                    } else if( input[key] != search_value ){
                        include = false;
                    }
                }
                
                if( include ) {
                    tmp_arr[cnt] = key;
                    cnt++;
                }
            }
            
            return tmp_arr;
        },// }}}
        
        // {{{ array_map
        array_map: function( callback ) {
            // Applies the callback to the elements of the given arrays
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_map/
            // +       version: 811.1812
            // +   original by: Andrea Giammarchi (http://webreflection.blogspot.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // %        note 1: Takes a as: function an argument, not a function's name
            // *     example 1: $P.array_map( function(a){return (a * a * a)}, [1, 2, 3, 4, 5] );
            // *     returns 1: [ 1, 8, 27, 64, 125 ]
        
            var argc = arguments.length, argv = arguments;
            var j = argv[1].length, i = 0, k = 1, m = 0;
            var tmp = [], tmp_ar = [];
        
            while (i < j) {
                while (k < argc){
                    tmp[m++] = argv[k++][i];
                }
        
                m = 0;
                k = 1;
        
                if( callback ){
                    tmp_ar[i++] = callback.apply(null, tmp);
                } else{
                    tmp_ar[i++] = tmp;
                }
        
                tmp = [];
            }
        
            return tmp_ar;
        },// }}}
        
        // {{{ array_merge
        array_merge: function() {
            // Merge one or more arrays
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_merge/
            // +       version: 811.2517
            // +   original by: Brett Zamir
            // +   bugfixed by: Nate
            // -    depends on: is_int
            // %          note: Relies on is_int because !isNaN accepts floats     
            // *     example 1: $P.arr1 = {"color": "red", 0: 2, 1: 4}
            // *     example 1: $P.arr2 = {0: "a", 1: "b", "color": "green", "shape": "trapezoid", 2: 4}
            // *     example 1: $P.array_merge(arr1, arr2)
            // *     returns 1: {"color": "green", 0: 2, 1: 4, 2: "a", 3: "b", "shape": "trapezoid", 4: 4}
            // *     example 2: $P.arr1 = []
            // *     example 2: $P.arr2 = {1: "data"}
            // *     example 2: $P.array_merge(arr1, arr2)
            // *     returns 2: {1: "data"}
            
            var args = Array.prototype.slice.call(arguments);
            var retObj = {}, k, j = 0, i = 0;
            var retArr;
            
            for (i=0, retArr=true; i < args.length; i++) {
                if (!(args[i] instanceof Array)) {
                    retArr=false;
                    break;
                }
            }
            
            if (retArr) {
                return args;
            }
            var ct = 0;
            
            for (i=0, ct=0; i < args.length; i++) {
                if (args[i] instanceof Array) {
                    for (j=0; j < args[i].length; j++) {
                        retObj[ct++] = args[i][j];
                    }
                } else {
                    for (k in args[i]) {
                        if (this.is_int(k)) {
                            retObj[ct++] = args[i][k];
                        } else {
                            retObj[k] = args[i][k];
                        }
                    }
                }
            }
            
            return retObj;
        },// }}}
        
        // {{{ array_merge_recursive
        array_merge_recursive: function (arr1, arr2){
            // Merge two or more arrays recursively
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_merge_recursive/
            // +       version: 812.114
            // +   original by: Subhasis Deb
            // -    depends on: array_merge
            // *     example 1: $P.arr1 = {'color': {'favourite': 'read'}, 0: 5}
            // *     example 1: $P.arr2 = {0: 10, 'color': {'favorite': 'green', 0: 'blue'}}
            // *     example 1: $P.array_merge_recursive(arr1, arr2)
            // *     returns 1: {'color': {'favorite': {0: 'red', 1: 'green'}, 0: 'blue'}, 1: 5, 1: 10}
        
            if ((arr1 && (arr1 instanceof Array)) && (arr2 && (arr2 instanceof Array))) {
                for (var idx in arr2) {
                    arr1.push(arr2[idx]);
                }
            } else if ((arr1 && (arr1 instanceof Object)) && (arr2 && (arr2 instanceof Object))) {
                for (var idx in arr2) {
                    if (idx in arr1) {
                        if (typeof arr1[idx] == 'object' && typeof arr2 == 'object') {
                            arr1[idx] = this.array_merge(arr1[idx], arr2[idx]);
                        } else {
                            arr1[idx] = arr2[idx];
                        }
                    } else {
                        arr1[idx] = arr2[idx];
                    }
                }
            }
            
            return arr1;
        },// }}}
        
        // {{{ array_pad
        array_pad: function ( input, pad_size, pad_value ) {
            // Pad array to the specified length with a value
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_pad/
            // +       version: 811.1314
            // +   original by: Waldo Malqui Silva
            // *     example 1: $P.array_pad([ 7, 8, 9 ], 2, 'a');
            // *     returns 1: [ 7, 8, 9]
            // *     example 2: $P.array_pad([ 7, 8, 9 ], 5, 'a');
            // *     returns 2: [ 7, 8, 9, 'a', 'a']
            // *     example 3: $P.array_pad([ 7, 8, 9 ], 5, 2);
            // *     returns 3: [ 7, 8, 9, 2, 2]
            // *     example 4: $P.array_pad([ 7, 8, 9 ], -5, 'a');
            // *     returns 4: [ 'a', 'a', 7, 8, 9 ]
        
            var pad = [], newArray = [], newLength, i=0;
        
            if ( input instanceof Array && !isNaN ( pad_size ) ) {
                newLength = ( ( pad_size < 0 ) ? ( pad_size * -1 ) : pad_size );
                if ( newLength > input.length ) {
                    for ( i = 0; i < ( newLength - input.length ); i++ ) { newArray [ i ] = pad_value; }
                    pad = ( ( pad_size < 0 ) ? newArray.concat ( input ) : input.concat ( newArray ) );
                } else {
                    pad = input;
                }
            }
        
            return pad;
        },// }}}
        
        // {{{ array_pop
        array_pop: function( array ) {
            // Pop the element off the end of array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_pop/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.array_pop([0,1,2]);
            // *     returns 1: 2
        
            // done popping, are we?
            if( !array.length ){
                return null;
            }
        
            return array.pop();
        },// }}}
        
        // {{{ array_product
        array_product: function ( input ) {
            // Calculate the product of values in an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_product/
            // +       version: 811.1314
            // +   original by: Waldo Malqui Silva
            // *     example 1: $P.array_product([ 2, 4, 6, 8 ]);
            // *     returns 1: 384
        
            var Index = 0, Product = 1;
            if ( input instanceof Array ) {
                while ( Index < input.length ) {
                    Product *= ( !isNaN ( input [ Index ] ) ? input [ Index ] : 0 );
                    Index++;
                }
            } else {
                Product = null;
            }
        
            return Product;
        },// }}}
        
        // {{{ array_push
        array_push: function ( array ) {
            // Push one or more elements onto the end of array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_push/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.array_push(['kevin','van'], 'zonneveld');
            // *     returns 1: 3
        
            var i, argv = arguments, argc = argv.length;
        
            for (i=1; i < argc; i++){
                array[array.length++] = argv[i];
            }
        
            return array.length;
        },// }}}
        
        // {{{ array_rand
        array_rand: function ( input, num_req ) {
            // Pick one or more random entries out of an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_rand/
            // +       version: 811.1314
            // +   original by: Waldo Malqui Silva
            // *     example 1: $P.array_rand( ['Kevin'], 1 );
            // *     returns 1: 0
        
            var Indexes = [];
            var Ticks = num_req || 1;
            var checkDuplicate = function ( input, value ) {
                var Exist = false, Index = 0;
                while ( Index < input.length ) {
                    if ( input [ Index ] === value ) {
                        Exist = true;
                        break;
                    }
                    Index++;
                }
                return Exist;
            };
        
            if ( input instanceof Array && Ticks <= input.length ) {
                while ( true ) {
                    var Rand = Math.floor ( ( Math.random ( ) * input.length ) );
                    if ( Indexes.length === Ticks ) { break; }
                    if ( !checkDuplicate ( Indexes, Rand ) ) { Indexes.push ( Rand ); }
                }
            } else {
                Indexes = null;
            }
        
            return ( ( Ticks == 1 ) ? Indexes.join ( ) : Indexes );
        },// }}}
        
        // {{{ array_reduce
        array_reduce: function( a_input, callback ) {
            // Iteratively reduce the array to a single value using a callback function
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_reduce/
            // +       version: 811.1812
            // +   original by: Alfonso Jimenez (http://www.alfonsojimenez.com)
            // %        note 1: Takes a as: function an argument, not a function's name
            // *     example 1: $P.array_reduce([1, 2, 3, 4, 5], function(v, w){v += w;return v;});
            // *     returns 1: 15
            
            var lon = a_input.length;
            var res = 0, i = 0;
            var tmp = new Array();
        
            
            for(i = 0; i < lon; i+=2 ) {
                tmp[0] = a_input[i];
                if(a_input[(i+1)]){
                    tmp[1] = a_input[(i+1)];
                } else {
                    tmp[1] = 0;
                }
                res+= callback.apply(null, tmp);
                tmp = new Array();
            }
            
            return res;
        },// }}}
        
        // {{{ array_reverse
        array_reverse: function( array, preserve_keys ) {
            // Return an array with elements in reverse order
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_reverse/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Karol Kowalski
            // *     example 1: $P.array_reverse( [ 'php', '4.0', ['green', 'red'] ], true );
            // *     returns 1: { 2: ['green', 'red'], 1: 4, 0: 'php'}
        
            var arr_len=array.length, newkey=0, tmp_ar = {};
        
            for(var key in array){
                newkey=arr_len-key-1;
                tmp_ar[(!!preserve_keys)?newkey:key]=array[newkey];
            }
        
            return tmp_ar;
        },// }}}
        
        // {{{ array_search
        array_search: function( needle, haystack, strict ) {
            // Searches the array for a given value and returns the corresponding key if
            // successful
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_search/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.array_search('zonneveld', {firstname: 'kevin', middle: 'van', surname: 'zonneveld'});
            // *     returns 1: 'surname'
        
            var strict = !!strict;
        
            for(var key in haystack){
                if( (strict && haystack[key] === needle) || (!strict && haystack[key] == needle) ){
                    return key;
                }
            }
        
            return false;
        },// }}}
        
        // {{{ array_shift
        array_shift: function( array ) {
            // Shift an element off the beginning of array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_shift/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Martijn Wieringa
            // *     example 1: $P.array_shift(['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: 'Kevin'
        
            if (array.length > 0) {
                return array.shift();
            }
            
            return null;
        },// }}}
        
        // {{{ array_slice
        array_slice: function(arr, offst, lgth, preserve_keys) {
            // Extract a slice of the array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_slice/
            // +       version: 811.1323
            // +   original by: Brett Zamir
            // -    depends on: is_int
            // %          note: Relies on is_int because !isNaN accepts floats 
            // *     example 1: $P.array_slice(["a", "b", "c", "d", "e"], 2, -1);
            // *     returns 1: {0: 'c', 1: 'd'}
            // *     example 2: $P.array_slice(["a", "b", "c", "d", "e"], 2, -1, true);
            // *     returns 2: {2: 'c', 3: 'd'}
        
            /*
            if ('callee' in arr && 'length' in arr) {
                arr = Array.prototype.slice.call(arr);
            }
            */
                
            if (!(arr instanceof Array) || (preserve_keys && offst != 0)) { // Assoc. array as input or if required as output
                var lgt =0, newAssoc = {};
                for (var key in arr) {
                    //if (key !== 'length') {
                        lgt += 1;
                        newAssoc[key] = arr[key];
                    //}
                }
                arr = newAssoc;
                
                offst = (offst < 0) ? lgt + offst : offst;
                lgth  = lgth == undefined ? lgt : (lgth < 0) ? lgt + lgth - offst : lgth;
                
                var assoc = {};
                var start = false, it=-1, arrlgth=0, no_pk_idx=0;
                for (var key in arr) {
                    ++it;
                    if (arrlgth >= lgth) {
                      break;
                    }
                    if (it == offst){
                      start = true;
                    }
                    if (!start) {
                       continue;
                    }
                    ++arrlgth;
                    if (this.is_int(key) && !preserve_keys) {
                        assoc[no_pk_idx++] = arr[key];
                    } else {
                        assoc[key] = arr[key];
                    }
                }
                //assoc.length = arrlgth; // Make as array-like object (though length will not be dynamic)
                return assoc;
            }
            
            if (lgth === undefined) {
                return arr.slice(offst);    
            } else if (lgth >= 0) {
                return arr.slice(offst, offst + lgth);
            } else {
                return arr.slice(offst, lgth);
            }
            
        },// }}}
        
        // {{{ array_sum
        array_sum: function( array ) {
            // Calculate the sum of values in an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_sum/
            // +       version: 811.2517
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Nate
            // *     example 1: $P.array_sum([4, 9, 182.6]);
            // *     returns 1: 195.6
        
            var key, sum=0;
        
            // input sanitation
            if( !array || (array.constructor !== Array && array.constructor !== Object) || !array.length ){
                return null;
            }
        
            for(key in array){
                sum += array[key];
            }
        
            return sum;
        },// }}}
        
        // {{{ array_unique
        array_unique: function( array ) {
            // Removes duplicate values from an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_unique/
            // +       version: 811.1314
            // +   original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
            // +      input by: duncan
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Nate
            // *     example 1: $P.array_unique(['Kevin','Kevin','van','Zonneveld','Kevin']);
            // *     returns 1: ['Kevin','van','Zonneveld']
            // *     example 2: $P.array_unique({'a': 'green', 0: 'red', 'b': 'green', 1: 'blue', 2: 'red'});
            // *     returns 2: {'a': 'green', 0: 'red', 1: 'blue'}
            
            var key = '', tmp_arr1 = {}, tmp_arr2 = {};
            var val = '';
            tmp_arr1 = array;
            
            var __array_search = function (needle, haystack, strict) {
                var fkey = '';
                var strict = !!strict;
                for (fkey in haystack) {
                    if ((strict && haystack[fkey] === needle) || (!strict && haystack[fkey] == needle) ) {
                        return fkey;
                    }
                }
                return false;
            }    
            
            for (key in tmp_arr1) {
                val = tmp_arr1[key];
                if (false === __array_search(val, tmp_arr2)) {
                    tmp_arr2[key] = val;
                }
                
                delete tmp_arr1[key];
            }
            
            return tmp_arr2;
        },// }}}
        
        // {{{ array_unshift
        array_unshift: function( array ) {
            // Prepend one or more elements to the beginning of an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_unshift/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Martijn Wieringa
            // *     example 1: $P.array_unshift(['van', 'Zonneveld'], 'Kevin');
            // *     returns 1: 3
        
            var argc = arguments.length, argv = arguments, i;
            
            for (i = 1; i < argc; i++) {
                array.unshift(argv[i]);
            }
            
            return (array.length);
        },// }}}
        
        // {{{ array_values
        array_values: function( input ) {
            // Return all the values of an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_values/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.array_values( {firstname: 'Kevin', surname: 'van Zonneveld'} );
            // *     returns 1: {0: 'Kevin', 1: 'van Zonneveld'}
        
            var tmp_arr = new Array(), cnt = 0;
        
            for ( key in input ){
                tmp_arr[cnt] = input[key];
                cnt++;
            }
        
            return tmp_arr;
        },// }}}
        
        // {{{ array_walk
        array_walk: function (array, funcname, userdata) {
            // Apply a user to: function every member of an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_walk/
            // +       version: 811.1812
            // +   original by: Johnny Mast (http://www.phpvrouwen.nl)
            // *     example 1: $P.array_walk ({'a':'b'}, 'void', 'userdata');
            // *     returns 1: true
            // *     example 2: $P.array_walk ('a', 'void', 'userdata');
            // *     returns 2: false
            
            var key; 
            
            if (typeof array != 'object') {
                return false;
            }
            
            for (key in array) {
                if (typeof (userdata) != 'undefined') {
                    eval (funcname + '( array [key] , key , userdata  )' );
                } else {
                    eval (funcname + '(  userdata ) ');
                }
            }
            
            return true;
        },// }}}
        
        // {{{ array_walk_recursive
        array_walk_recursive: function (array, funcname, userdata) {
            // Apply a user recursively: function to every member of an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_walk_recursive/
            // +       version: 811.1812
            // +   original by: Johnny Mast (http://www.phpvrouwen.nl)
            // *     example 1: $P.array_walk_recursive ({'a': 'b', 'c': {'d': 'e'}}, 'void', 'userdata');
            // *     returns 1: true
            // *     example 2: $P.array_walk_recursive ('a', 'void', 'userdata');
            // *     returns 2: false
            
            var key;
            
            if (typeof array != 'object'){
                return false;
            }
         
            for (key in array) {            
                if (typeof array[key] == 'object') { 
                    return this.array_walk_recursive (array [key], funcname, userdata);
                }
                
                if (typeof (userdata) != 'undefined') {
                    eval (funcname + '( array [key] , key , userdata  )');
                } else {
                    eval (funcname + '(  userdata ) ');
                }
            }
            
            return true;
        },// }}}
        
        // {{{ chunk_split
        chunk_split: function(body, chunklen, end) {
            // Split a string into smaller chunks
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_chunk_split/
            // +       version: 812.115
            // +   original by: Paulo Ricardo F. Santos
            // *     example 1: $P.chunk_split('Hello world!', 1, '*');
            // *     returns 1: 'H*e*l*l*o* *w*o*r*l*d*!*'
            // *     example 2: $P.chunk_split('Hello world!', 10, '*');
            // *     returns 2: 'Hello worl*d!*'
            
            if (chunklen < 1) {
                return false;
            }
        
            var result = '', chunklen = chunklen || 76, end = end || '\r\n';
        
            while (body.length > chunklen) {
                result += body.substring(0, chunklen) + end;
                body = body.substring(chunklen);
            }
        
            return result + body + end;
        },// }}}
        
        // {{{ compact
        compact: function ( var_names ) {
            // Create array containing variables and their values
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_compact/
            // +       version: 811.1314
            // +   original by: Waldo Malqui Silva
            // +    tweaked by: Jack
            // *     example 1: $P.var1 = 'Kevin'; var2 = 'van'; var3 = 'Zonneveld';  
            // *     example 1: $P.compact('var1', 'var2', 'var3');
            // *     returns 1: {'var1': 'Kevin', 'var2': 'van', 'var3': 'Zonneveld'}    
        
            var Index = 0, Matrix = {};
            var process = function ( value ) {
                var i = 0, l = value.length, key_value = '';
                for (i = 0; i < l; i++ ) {
                    var key_value = value [ i ];
                    if ( key_value instanceof Array ) {
                        process ( key_value );
                    } else {
                        if ( typeof window [ key_value ] !== 'undefined' ) {
                            Matrix [ key_value ] = window [ key_value ];
                        }
                    }
                }
                return true;
            };
        
            process ( arguments );
            return Matrix;
        },// }}}
        
        // {{{ count
        count: function( mixed_var, mode ) {
            // Count elements in an array, or properties in an object
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_count/
            // +       version: 811.1314
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Waldo Malqui Silva
            // *     example 1: $P.count([[0,0],[0,-4]], 'COUNT_RECURSIVE');
            // *     returns 1: 6
            // *     example 2: $P.count({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE');
            // *     returns 2: 6
        
            var key, cnt = 0;
        
            if( mode == 'COUNT_RECURSIVE' ) mode = 1;
            if( mode != 1 ) mode = 0;
        
            for (key in mixed_var){
                cnt++;
                if( mode==1 && mixed_var[key] && (mixed_var[key].constructor === Array || mixed_var[key].constructor === Object) ){
                    cnt += this.count(mixed_var[key], 1);
                }
            }
        
            return cnt;
        },// }}}
        
        // {{{ end
        end: function ( array ) {
            // Set the internal pointer of an array to its last element
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_end/
            // +       version: 809.1713
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Legaev Andrey
            // +    revised by: J A R
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   restored by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.end({0: 'Kevin', 1: 'van', 2: 'Zonneveld'});
            // *     returns 1: 'Zonneveld'
            // *     example 2: $P.end(['Kevin', 'van', 'Zonneveld']);
            // *     returns 2: 'Zonneveld'
            
            var last_elm, key;
            
            // The native .pop() method didn't not work with objects (associative arrays)
            // We need that for PHP compatibility
            
            if (array.constructor == Array){
                last_elm = array[(array.length-1)];
            } else {
                for (key in array){
                    last_elm = array[key];
                }
            }
            
            return last_elm;
        },// }}}
        
        // {{{ in_array
        in_array: function(needle, haystack, strict) {
            // Checks if a value exists in an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_in_array/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.in_array('van', ['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: true
        
            var found = false, key, strict = !!strict;
        
            for (key in haystack) {
                if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
                    found = true;
                    break;
                }
            }
        
            return found;
        },// }}}
        
        // {{{ krsort
        krsort: function(array, sort_flags) {
            // Sort an array by key in reverse order
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_krsort/
            // +       version: 809.522
            // +   original by: GeekFG (http://geekfg.blogspot.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.krsort({2: 'van', 3: 'Zonneveld', 1: 'Kevin'});
            // *     returns 1: true
            
            var tmp_arr = {}, values = array, keys = [], key_num = 0, key = '', i = 0; 
            var sorter = false, array = false;
            
            // For now only SORT_NUMERIC has a custom sorter
            // and SORT_REGULAR, SORT_STRING, and SORT_LOCALE_STRING
            // are all handled with the default sorter 
            if (sort_flags == 'SORT_NUMERIC') {
                sorter = function (a, b) {
                    return(a - b);
                };
            }
            
            // Make a list of key names
            for (key in values) { 
                keys[key_num++] = key; 
            }
             
            // Sort key names
            if (sorter !== false) {
                keys = keys.sort(sorter);
            } else {
                keys = keys.sort();
            }
            
            // What makes it this.krsort:
            keys.reverse();    
            
            // Rebuild array with sorted keynames
            for (i = 0; i < key_num; i++) {
                key = keys[i];
                tmp_arr[key] = values[key]; 
            } 
            
            // Overwrite the original array, don't return it, to be complient with the php manual
            array = tmp_arr;
            return true; 
        },// }}}
        
        // {{{ ksort
        ksort: function(array, sort_flags) {
            // Sort an array by key
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_ksort/
            // +       version: 810.112
            // +   original by: GeekFG (http://geekfg.blogspot.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // %          note: The examples are correct, this is a new way
            // *     example 1: $P.data = {2: 'van', 3: 'Zonneveld', 1: 'Kevin'}; 
            // *     example 1: $P.ksort(data);
            // *     results 1: data == {1: 'Kevin', 2: 'van', 3: 'Zonneveld'}
            // *     returns 1: true
            
            var tmp_arr = {}, values = array, keys = [], key_num = 0, key = '', i = 0; 
            var sorter = false, array = false;
            
            // For now only SORT_NUMERIC has a custom sorter
            // and SORT_REGULAR, SORT_STRING, and SORT_LOCALE_STRING
            // are all handled with the default sorter 
            if (sort_flags == 'SORT_NUMERIC') {
                sorter = function (a, b) {
                    return(a - b);
                };
            }
            
            // Make a list of key names
            for (key in values) { 
                keys[key_num++] = key; 
            }
             
            // Sort key names
            if (sorter !== false) {
                keys = keys.sort(sorter);
            } else {
                keys = keys.sort();
            }
            
            // Rebuild array with sorted keynames
            for (i = 0; i < key_num; i++) {
                key = keys[i];
                tmp_arr[key] = values[key]; 
            } 
            
            // Overwrite the original array, don't return it, to be complient with the php manual
            array = tmp_arr;
            return true; 
        },// }}}
        
        // {{{ range
        range: function ( low, high, step ) {
            // Create an array containing a range of elements
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_range/
            // +       version: 811.1314
            // +   original by: Waldo Malqui Silva
            // *     example 1: $P.range ( 0, 12 );
            // *     returns 1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            // *     example 2: $P.range( 0, 100, 10 );
            // *     returns 2: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
            // *     example 3: $P.range( 'a', 'i' );
            // *     returns 3: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
            // *     example 4: $P.range( 'c', 'a' );
            // *     returns 4: ['c', 'b', 'a']
        
            var matrix = [];
            var inival, endval, plus;
            var walker = step || 1;
            var chars  = false;
        
            if ( !isNaN ( low ) && !isNaN ( high ) ) {
                inival = low;
                endval = high;
            } else if ( isNaN ( low ) && isNaN ( high ) ) {
                chars = true;
                inival = low.charCodeAt ( 0 );
                endval = high.charCodeAt ( 0 );
            } else {
                inival = ( isNaN ( low ) ? 0 : low );
                endval = ( isNaN ( high ) ? 0 : high );
            }
        
            plus = ( ( inival > endval ) ? false : true );
            if ( plus ) {
                while ( inival <= endval ) {
                    matrix.push ( ( ( chars ) ? String.fromCharCode ( inival ) : inival ) );
                    inival += walker;
                }
            } else {
                while ( inival >= endval ) {
                    matrix.push ( ( ( chars ) ? String.fromCharCode ( inival ) : inival ) );
                    inival -= walker;
                }
            }
        
            return matrix;
        },// }}}
        
        // {{{ reset
        reset: function ( array ) {
            // Set the internal pointer of an array to its first element
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_reset/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Legaev Andrey
            // *     example 1: $P.reset({0: 'Kevin', 1: 'van', 2: 'Zonneveld'});
            // *     returns 1: 'Kevin'
        
            var first_elm, key;
        
            if (array.constructor == Array){
                first_elm = array[0];
            } else {
                for (key in array){
                    first_elm = array[key];
                    break;
                }
            }
        
            return first_elm;
        },// }}}
        
        // {{{ rsort
        rsort: function( array, sort_flags ) {
            // Sort an array in reverse order
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_rsort/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.rsort(['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: true
            
            var sorter = false;
            
            // For now only SORT_NUMERIC has a custom sorter
            // and SORT_REGULAR, SORT_STRING, and SORT_LOCALE_STRING
            // are all handled with the default sorter 
            if (sort_flags == 'SORT_NUMERIC') {
                sorter = function (a, b) {
                    return(a - b);
                };
            }
            
            if (sorter !== false) {
                array.sort(sorter);
            } else {
                array.sort();
            }
            
            // What makes it this.rsort:
            array.reverse();
            
            return true;
        },// }}}
        
        // {{{ shuffle
        shuffle: function( array ) {
            // Shuffle an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_shuffle/
            // +       version: 809.522
            // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.shuffle(['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: true
            
            array.sort(function() {return 0.5 - Math.random();});
            return true;
        },// }}}
        
        // {{{ sizeof
        sizeof: function ( mixed_var, mode ) {
            // Alias of count()
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_sizeof/
            // +       version: 809.522
            // +   original by: Philip Peterson
            // -    depends on: count
            // *     example 1: $P.sizeof([[0,0],[0,-4]], 'COUNT_RECURSIVE');
            // *     returns 1: 6
            // *     example 2: $P.sizeof({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE');
            // *     returns 2: 6
         
            return this.count( mixed_var, mode );
        },// }}}
        
        // {{{ sort
        sort: function( array, sort_flags ) {
            // Sort an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_sort/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.sort(['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: true
            
            var sorter = false;
            
            // For now only SORT_NUMERIC has a custom sorter
            // and SORT_REGULAR, SORT_STRING, and SORT_LOCALE_STRING
            // are all handled with the default sorter 
            if (sort_flags == 'SORT_NUMERIC') {
                sorter = function (a, b) {
                    return(a - b);
                };
            }
            
            if (sorter !== false) {
                array.sort(sorter);
            } else {
                array.sort();
            }
            
            return true;
        },// }}}
        
        // {{{ get_class
        get_class: function(obj) {
            // Returns the name of the class of an object
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_get_class/
            // +       version: 809.522
            // +   original by: Ates Goral (http://magnetiq.com)
            // +   improved by: David James
            // *     example 1: $P.get_class(new (function MyClass() {}));
            // *     returns 1: "MyClass"
            // *     example 2: $P.get_class({});
            // *     returns 2: "Object"
            // *     example 3: $P.get_class([]);
            // *     returns 3: false
            // *     example 4: $P.get_class(42);
            // *     returns 4: false
            // *     example 5: $P.get_class(window);
            // *     returns 5: false
            // *     example 6: $P.get_class(function MyFunction() {});
            // *     returns 6: false
        
            if (obj instanceof Object && !(obj instanceof Array) 
                && !(obj instanceof Function) && obj.constructor
                && obj != window) {
                var arr = obj.constructor.toString().match(/function\s*(\w+)/);
        
                if (arr && arr.length == 2) {
                    return arr[1];
                }
            }
        
            return false;
        },// }}}
        
        // {{{ checkdate
        checkdate: function( month, day, year ) {
            // Validate a Gregorian date
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_checkdate/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Pyerre
            // *     example 1: $P.checkdate(12, 31, 2000);
            // *     returns 1: true
            // *     example 2: $P.checkdate(2, 29, 2001);
            // *     returns 2: false
            // *     example 3: $P.checkdate(03, 31, 2008);
            // *     returns 3: true
            // *     example 4: $P.checkdate(1, 390, 2000);
            // *     returns 4: false
        
            var myDate = new Date();
            myDate.setFullYear( year, (month - 1), day );
        
            return ((myDate.getMonth()+1) == month && day<32); 
        },// }}}
        
        // {{{ date
        date: function ( format, timestamp ) {
            // Format a local time/date
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_date/
            // +       version: 809.522
            // +   original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
            // +      parts by: Peter-Paul Koch (http://www.quirksmode.org/js/beat.html)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: MeEtc (http://yass.meetcweb.com)
            // +   improved by: Brad Touesnard
            // +   improved by: Tim Wiel
            // *     example 1: $P.date('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400);
            // *     returns 1: '09:09:40 m is month'
            // *     example 2: $P.date('F j, Y, g:i a', 1062462400);
            // *     returns 2: 'September 2, 2003, 2:26 am'
        
            var a, jsdate=((timestamp) ? new Date(timestamp*1000) : new Date());
            var pad = function(n, c){
                if( (n = n + "").length < c ) {
                    return new Array(++c - n.length).join("0") + n;
                } else {
                    return n;
                }
            };
            var txt_weekdays = ["Sunday","Monday","Tuesday","Wednesday",
                "Thursday","Friday","Saturday"];
            var txt_ordin = {1:"st",2:"nd",3:"rd",21:"st",22:"nd",23:"rd",31:"st"};
            var txt_months =  ["", "January", "February", "March", "April",
                "May", "June", "July", "August", "September", "October", "November",
                "December"];
        
            var f = {
                // Day
                    d: function(){
                        return pad(f.j(), 2);
                    },
                    D: function(){
                        t = f.l(); return t.substr(0,3);
                    },
                    j: function(){
                        return jsdate.getDate();
                    },
                    l: function(){
                        return txt_weekdays[f.w()];
                    },
                    N: function(){
                        return f.w() + 1;
                    },
                    S: function(){
                        return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th';
                    },
                    w: function(){
                        return jsdate.getDay();
                    },
                    z: function(){
                        return (jsdate - new Date(jsdate.getFullYear() + "/1/1")) / 864e5 >> 0;
                    },
        
                // Week
                    W: function(){
                        var a = f.z(), b = 364 + f.L() - a;
                        var nd2, nd = (new Date(jsdate.getFullYear() + "/1/1").getDay() || 7) - 1;
        
                        if(b <= 2 && ((jsdate.getDay() || 7) - 1) <= 2 - b){
                            return 1;
                        } else{
        
                            if(a <= 2 && nd >= 4 && a >= (6 - nd)){
                                nd2 = new Date(jsdate.getFullYear() - 1 + "/12/31");
                                return this.date("W", Math.round(nd2.getTime()/1000));
                            } else{
                                return (1 + (nd <= 3 ? ((a + nd) / 7) : (a - (7 - nd)) / 7) >> 0);
                            }
                        }
                    },
        
                // Month
                    F: function(){
                        return txt_months[f.n()];
                    },
                    m: function(){
                        return pad(f.n(), 2);
                    },
                    M: function(){
                        t = f.F(); return t.substr(0,3);
                    },
                    n: function(){
                        return jsdate.getMonth() + 1;
                    },
                    t: function(){
                        var n;
                        if( (n = jsdate.getMonth() + 1) == 2 ){
                            return 28 + f.L();
                        } else{
                            if( n & 1 && n < 8 || !(n & 1) && n > 7 ){
                                return 31;
                            } else{
                                return 30;
                            }
                        }
                    },
        
                // Year
                    L: function(){
                        var y = f.Y();
                        return (!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0;
                    },
                    //o not supported yet
                    Y: function(){
                        return jsdate.getFullYear();
                    },
                    y: function(){
                        return (jsdate.getFullYear() + "").slice(2);
                    },
        
                // Time
                    a: function(){
                        return jsdate.getHours() > 11 ? "pm" : "am";
                    },
                    A: function(){
                        return f.a().toUpperCase();
                    },
                    B: function(){
                        // peter paul koch:
                        var off = (jsdate.getTimezoneOffset() + 60)*60;
                        var theSeconds = (jsdate.getHours() * 3600) +
                                         (jsdate.getMinutes() * 60) +
                                          jsdate.getSeconds() + off;
                        var beat = Math.floor(theSeconds/86.4);
                        if (beat > 1000) beat -= 1000;
                        if (beat < 0) beat += 1000;
                        if ((String(beat)).length == 1) beat = "00"+beat;
                        if ((String(beat)).length == 2) beat = "0"+beat;
                        return beat;
                    },
                    g: function(){
                        return jsdate.getHours() % 12 || 12;
                    },
                    G: function(){
                        return jsdate.getHours();
                    },
                    h: function(){
                        return pad(f.g(), 2);
                    },
                    H: function(){
                        return pad(jsdate.getHours(), 2);
                    },
                    i: function(){
                        return pad(jsdate.getMinutes(), 2);
                    },
                    s: function(){
                        return pad(jsdate.getSeconds(), 2);
                    },
                    //u not supported yet
        
                // Timezone
                    //e not supported yet
                    //I not supported yet
                    O: function(){
                       var t = pad(Math.abs(jsdate.getTimezoneOffset()/60*100), 4);
                       if (jsdate.getTimezoneOffset() > 0) t = "-" + t; else t = "+" + t;
                       return t;
                    },
                    P: function(){
                        var O = f.O();
                        return (O.substr(0, 3) + ":" + O.substr(3, 2));
                    },
                    //T not supported yet
                    //Z not supported yet
        
                // Full Date/Time
                    c: function(){
                        return f.Y() + "-" + f.m() + "-" + f.d() + "T" + f.h() + ":" + f.i() + ":" + f.s() + f.P();
                    },
                    //r not supported yet
                    U: function(){
                        return Math.round(jsdate.getTime()/1000);
                    }
            };
        
            return format.replace(/[\\]?([a-zA-Z])/g, function(t, s){
                if( t!=s ){
                    // escaped
                    ret = s;
                } else if( f[s] ){
                    // a this.date exists: function
                    ret = f[s]();
                } else{
                    // nothing special
                    ret = s;
                }
        
                return ret;
            });
        },// }}}
        
        // {{{ getdate
        getdate: function(timestamp) {
            // Get date/time information
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_getdate/
            // +       version: 812.313
            // +   original by: Paulo Ricardo F. Santos
            // *     example 1: $P.getdate(1055901520);
            // *     returns 1: {'seconds': 40, 'minutes': 58, 'hours': 21, 'mday': 17, 'wday': 2, 'mon': 6, 'year': 2003, 'yday': 167, 'weekday': 'Tuesday', 'month': 'June', '0': 1055901520}
        
            var _w = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var _m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var d = (typeof timestamp == 'number') ? new Date(timestamp * 1000) : new Date();
            var w = d.getDay();
            var m = d.getMonth();
            var y = d.getFullYear();
            var r = {};
        
            r['seconds'] = d.getSeconds();
            r['minutes'] = d.getMinutes();
            r['hours'] = d.getHours();
            r['mday'] = d.getDate();
            r['wday'] = w;
            r['mon'] = m + 1;
            r['year'] = y;
            r['yday'] = Math.floor((d - (new Date(y, 0, 1))) / 86400000);
            r['weekday'] = _w[w];
            r['month'] = _m[m];
            r['0'] = parseInt(d.getTime() / 1000);
        
            return r;
        },// }}}
        
        // {{{ microtime
        microtime: function(get_as_float) {
            // Return current Unix timestamp with microseconds
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_microtime/
            // +       version: 812.313
            // +   original by: Paulo Ricardo F. Santos
            // *     example 1: $P.timeStamp = microtime(true);
            // *     results 1: timeStamp > 1000000000 && timeStamp < 2000000000
        
            var now = new Date().getTime() / 1000;
            var s = parseInt(now);
        
            return (get_as_float) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
        },// }}}
        
        // {{{ mktime
        mktime: function() {
            // Get Unix timestamp for a date
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_mktime/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: baris ozdil
            // +      input by: gabriel paderni 
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: FGFEmperor
            // +      input by: Yannoo
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: jakes
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.mktime(14, 10, 2, 2, 1, 2008);
            // *     returns 1: 1201871402
            // *     example 2: $P.mktime(0, 0, 0, 0, 1, 2008);
            // *     returns 2: 1196463600
            
            var no, ma = 0, mb = 0, i = 0, d = new Date(), argv = arguments, argc = argv.length;
            d.setHours(0,0,0); d.setDate(1); d.setMonth(1); d.setYear(1972);
         
            var dateManip = {
                0: function(tt){ return d.setHours(tt); },
                1: function(tt){ return d.setMinutes(tt); },
                2: function(tt){ set = d.setSeconds(tt); mb = d.getDate() - 1; return set; },
                3: function(tt){ set = d.setMonth(parseInt(tt)-1); ma = d.getFullYear() - 1972; return set; },
                4: function(tt){ return d.setDate(tt+mb); },
                5: function(tt){ return d.setYear(tt+ma); }
            };
            
            for( i = 0; i < argc; i++ ){
                no = parseInt(argv[i]*1);
                if (isNaN(no)) {
                    return false;
                } else {
                    // arg is number, let's manipulate date object
                    if(!dateManip[i](no)){
                        // failed
                        return false;
                    }
                }
            }
        
            return Math.floor(d.getTime()/1000);
        },// }}}
        
        // {{{ time
        time: function() {
            // Return current Unix timestamp
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_time/
            // +       version: 809.522
            // +   original by: GeekFG (http://geekfg.blogspot.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: metjay
            // *     example 1: $P.timeStamp = time();
            // *     results 1: timeStamp > 1000000000 && timeStamp < 2000000000
            
            return Math.round(new Date().getTime()/1000);
        },// }}}
        
        // {{{ basename
        basename: function(path, suffix) {
            // Returns filename component of path
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_basename/
            // +       version: 811.1414
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Ash Searle (http://hexmen.com/blog/)
            // +   improved by: Lincoln Ramsay
            // +   improved by: djmix
            // *     example 1: $P.basename('/www/site/home.htm', '.htm');
            // *     returns 1: 'home'
        
            var b = path.replace(/^.*[\/\\]/g, '');
            
            if (typeof(suffix) == 'string' && b.substr(b.length-suffix.length) == suffix) {
                b = b.substr(0, b.length-suffix.length);
            }
            
            return b;
        },// }}}
        
        // {{{ dirname
        dirname: function(path) {
            // Returns directory name component of path
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_dirname/
            // +       version: 809.522
            // +   original by: Ozh
            // +   improved by: XoraX (http://www.xorax.info)
            // *     example 1: $P.dirname('/etc/passwd');
            // *     returns 1: '/etc'
            // *     example 2: $P.dirname('c:/Temp/x');
            // *     returns 2: 'c:/Temp'
            // *     example 3: $P.dirname('/dir/test/');
            // *     returns 3: '/dir'
            
            return path.replace(/\\/g,'/').replace(/\/[^\/]*\/?$/, '');
        },// }}}
        
        // {{{ file
        file: function( url ) {
            // Reads entire file into an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_file/
            // +       version: 811.1812
            // +   original by: Legaev Andrey
            // +      input by: Jani Hartikainen
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // %        note 1: This uses: function XmlHttpRequest and cannot retrieve resource from different domain.
            // %        note 1: Synchronous so may lock up browser, mainly here for study purposes.
            // %        note 1: To avoid browser blocking issues's consider using jQuery's: $('#divId').load('http://url') instead.
            // *     example 1: $P.file('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
            // *     returns 1: {0: '123'}
        
            var req = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
            if (!req) throw new Error('XMLHttpRequest not supported');
               
            req.open("GET", url, false);
            req.send(null);
            
            return req.responseText.split('\n');
        },// }}}
        
        // {{{ file_exists
        file_exists: function (url) {
            // Checks whether a file or directory exists
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_file_exists/
            // +       version: 812.311
            // +   original by: Enrique Gonzalez
            // +      input by: Jani Hartikainen
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // %        note 1: This uses: function XmlHttpRequest and cannot retrieve resource from different domain.
            // %        note 1: Synchronous so may lock up browser, mainly here for study purposes. 
            // *     example 1: $P.file_exists('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
            // *     returns 1: '123'
            
            var req = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
            if (!req) throw new Error('XMLHttpRequest not supported');
              
            // HEAD Results are usually shorter (faster) than GET
            req.open('HEAD', url, false);
            req.send(null);
            if (req.status == 200){
                return true;
            }
            
            return false;
        },// }}}
        
        // {{{ file_get_contents
        file_get_contents: function( url ) {
            // Reads entire file into a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_file_get_contents/
            // +       version: 811.1812
            // +   original by: Legaev Andrey
            // +      input by: Jani Hartikainen
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // %        note 1: This uses: function XmlHttpRequest and cannot retrieve resource from different domain.
            // %        note 1: Synchronous so may lock up browser, mainly here for study purposes. 
            // %        note 1: To avoid browser blocking issues's consider using jQuery's: $('#divId').load('http://url') instead.
            // *     example 1: $P.file_get_contents('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
            // *     returns 1: '123'
        
            var req = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
            if (!req) throw new Error('XMLHttpRequest not supported');
            
            req.open("GET", url, false);
            req.send(null);
            
            return req.responseText;
        },// }}}
        
        // {{{ filesize
        filesize: function (url) {
            // Gets file size
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_filesize/
            // +       version: 811.1812
            // +   original by: Enrique Gonzalez
            // +      input by: Jani Hartikainen
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // %        note 1: This uses: function XmlHttpRequest and cannot retrieve resource from different domain.
            // %        note 1: Synchronous so may lock up browser, mainly here for study purposes. 
            // *     example 1: $P.filesize('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
            // *     returns 1: '3'
        
            var req = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
            if (!req) throw new Error('XMLHttpRequest not supported');
            
            req.open ('HEAD', url, false);
            req.send (null);
            
            if (!req.getResponseHeader || !req.getResponseHeader('Content-Length')) {
                return false;
            } else {
                return req.getResponseHeader('Content-Length'); 
            }
        },// }}}
        
        // {{{ call_user_func_array
        call_user_func_array: function(func, parameters) {
            // Call a user given: function with an array of parameters
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_call_user_func_array/
            // +       version: 811.1812
            // +   original by: Thiago Mata (http://thiagomata.blog.com)
            // +   revised  by: Jon Hohle
            // *     example 1: $P.call_user_func_array('isNaN', ['a']);
            // *     returns 1: true
            // *     example 2: $P.call_user_func_array('isNaN', [1]);
            // *     returns 2: false
        
            if (typeof func == 'string') {
                if (typeof this[func] == 'function') { 
                    func = this[func]; 
                } else {
                    func = (new Function(null, 'return ' + func))();
                }
                
                if (typeof func != 'function') {
                    throw new Exception(func + ' is not a valid function');
                }
            }
            
            return func.apply(null, parameters);
        },// }}}
        
        // {{{ create_function: function create_function (args, code) {
            // Create an anonymous (lambda-style) function
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_create_function/
            // +       version: 809.522
            // +   original by: Johnny Mast (http://www.phpvrouwen.nl)
            // *     example 1: f = create_function('a, b', "return (a + b);");
            // *     example 1: f(1, 2);
            // *     returns 1: 3
            
        
        // {{{ function_exists
        function_exists: function( function_name ) {
            // Return TRUE if the given has: function been defined
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_function_exists/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Steve Clay
            // +   improved by: Legaev Andrey
            // *     example 1: $P.function_exists('isFinite');
            // *     returns 1: true
        
        
            if (typeof function_name == 'string'){
                return (typeof window[function_name] == 'function');
            } else{
                return (function_name instanceof Function);
            }
        },// }}}
        
        // {{{ get_included_files
        get_included_files: function() {
            // Returns an array with the names of included or required files
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_get_included_files/
            // +       version: 809.2915
            // +   original by: Michael White (http://getsprink.com)
            // *     example 1: $P.get_included_files();
            // *     returns 1: ['http://kevin.vanzonneveld.net/pj_tester.php']
        
            var cur_file = {};
            cur_file[window.location.href] = 1;
            if(!this.__php_js) this.__php_js = {};
            if(!this.__php_js.includes) this.__php_js.includes = cur_file;
        
            var includes = new Array();
            var i = 0;
            for(var key in this.__php_js.includes){
                includes[i] = key;
                i++;
            }
        
            return includes;
        },// }}}
        
        // {{{ include
        include: function( filename ) {
            // The include() statement includes and evaluates the specified file.
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_include/
            // +       version: 809.2411
            // +   original by: mdsjack (http://www.mdsjack.bo.it)
            // +   improved by: Legaev Andrey
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Michael White (http://getsprink.com)
            // %        note 1: Force Javascript execution to pause until the file is loaded. Usually causes failure if the file never loads. ( Use sparingly! )
            // %        note 2: The included file does not come available until a second script block, so typically use this in the header.
            // *     example 1: $P.include('http://www.phpjs.org/js/phpjs/_supporters/pj_test_supportfile_2.js');
            // *     returns 1: 1
        
            var js = document.createElement('script');
            js.setAttribute('type', 'text/javascript');
            js.setAttribute('src', filename);
            js.setAttribute('defer', 'defer');
            document.getElementsByTagName('HEAD')[0].appendChild(js);
        
            // save this.include state for reference by include_once
            var cur_file = {};
            cur_file[window.location.href] = 1;
        
            if (!window.php_js) window.php_js = {};
            if (!window.php_js.includes) window.php_js.includes = cur_file;
            if (!window.php_js.includes[filename]) {
                window.php_js.includes[filename] = 1;
            } else {
                window.php_js.includes[filename]++;
            }
        
            return window.php_js.includes[filename];
        },// }}}
        
        // {{{ include_once
        include_once: function( filename ) {
            // The include_once() statement includes and evaluates the specified file during
            // the execution of the script. This is a behavior similar to the include()
            // statement, with the only difference being that if the code from a file has
            // already been included, it will not be included again.  As the name suggests, it
            // will be included just once.
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_include_once/
            // +       version: 809.2411
            // +   original by: Legaev Andrey
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Michael White (http://getsprink.com)
            // -    depends on: include
            // *     example 1: $P.include_once('http://www.phpjs.org/js/phpjs/_supporters/pj_test_supportfile_2.js');
            // *     returns 1: true
        
            var cur_file = {};
            cur_file[window.location.href] = 1;
        
            if (!window.php_js) window.php_js = {};
            if (!window.php_js.includes) window.php_js.includes = cur_file;
            if (!window.php_js.includes[filename]) {
                if(this.include(filename)){
                    return true;
                }
            } else{
                return true;
            }
        },// }}}
        
        // {{{ require
        require: function( filename ) {
            // The require() statement includes and evaluates the specific file.
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_require/
            // +       version: 809.2411
            // +   original by: Michael White (http://getsprink.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // %        note 1: Force Javascript execution to pause until the file is loaded. Usually causes failure if the file never loads. ( Use sparingly! )
            // -    depends on: file_get_contents
            // *     example 1: $P.require('http://www.phpjs.org/js/phpjs/_supporters/pj_test_supportfile_2.js');
            // *     returns 1: 2
        
            var js_code = this.file_get_contents(filename);
            var script_block = document.createElement('script');
            script_block.type = 'text/javascript';
            var client_pc = navigator.userAgent.toLowerCase();
            if((client_pc.indexOf("msie") != -1) && (client_pc.indexOf("opera") == -1)) {
                script_block.text = js_code;
            } else {
                script_block.appendChild(document.createTextNode(js_code));
            }
        
            if(typeof(script_block) != "undefined") {
                document.getElementsByTagName("head")[0].appendChild(script_block);
        
                // save include state for reference by include_once and require_once()
                var cur_file = {};
                cur_file[window.location.href] = 1;
        
                if (!window.php_js) window.php_js = {};
                if (!window.php_js.includes) window.php_js.includes = cur_file;
        
                if (!window.php_js.includes[filename]) {
                    window.php_js.includes[filename] = 1;
                } else {
                    // Use += 1 because ++ waits until AFTER the original value is returned to increment the value.
                    return window.php_js.includes[filename] += 1;
                }
            }
        },// }}}
        
        // {{{ require_once
        require_once: function(filename) {
            // The require_once() statement includes and evaluates the specified file during
            // the execution of the script. This is a behavior similar to the require()
            // statement, with the only difference being that if the code from a file has
            // already been included, it will not be included again.  See the documentation for
            // require() for more information on how this statement works.
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_require_once/
            // +       version: 809.2411
            // +   original by: Michael White (http://getsprink.com)
            // -    depends on: require
            // *     example 1: $P.require_once('http://www.phpjs.org/js/phpjs/_supporters/pj_test_supportfile_2.js');
            // *     returns 1: true
        
            var cur_file = {};
            cur_file[window.location.href] = 1;
        
            // save include state for reference by include_once and this.require_once()
            if (!window.php_js) window.php_js = {};
            if (!window.php_js.includes) window.php_js.includes = cur_file;
            if (!window.php_js.includes[filename]) {
                if (this.require(filename)) {
                    return true;
                }
            } else {
                return true;
            }
        },// }}}
        
        // {{{ abs
        abs: function( mixed_number )  {
            // Absolute value
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_abs/
            // +       version: 811.1314
            // +   original by: Waldo Malqui Silva
            // +   improved by: Karol Kowalski
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // *     example 1: $P.abs(4.2);
            // *     returns 1: 4.2
            // *     example 2: $P.abs(-4.2);
            // *     returns 2: 4.2
            // *     example 3: $P.abs(-5);
            // *     returns 3: 5
            // *     example 4: $P.abs('_argos');
            // *     returns 4: 0
        
            return Math.abs(mixed_number) || 0;
        },// }}}
        
        // {{{ acos
        acos: function(arg) {
            // Arc cosine
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_acos/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.acos(0.3);
            // *     returns 1: 1.2661036727794992
        
            return Math.acos(arg);
        },// }}}
        
        // {{{ acosh
        acosh: function(arg) {
            // Inverse hyperbolic cosine
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_acosh/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.acosh(8723321.4);
            // *     returns 1: 16.674657798418625
        
            return Math.log(arg + Math.sqrt(arg*arg-1));
        },// }}}
        
        // {{{ asin
        asin: function(arg) {
            // Arc sine
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_asin/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.asin(0.3);
            // *     returns 1: 0.3046926540153975
        
            return Math.asin(arg);
        },// }}}
        
        // {{{ asinh
        asinh: function(arg) {
            // Inverse hyperbolic sine
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_asinh/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.asinh(8723321.4);
            // *     returns 1: 16.67465779841863
        
            return Math.log(arg + Math.sqrt(arg*arg+1));
        },// }}}
        
        // {{{ atan
        atan: function(arg) {
            // Arc tangent
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_atan/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.atan(8723321.4);
            // *     returns 1: 1.5707962121596615
        
            return Math.atan(arg);
        },// }}}
        
        // {{{ atanh
        atanh: function(arg) {
            // Inverse hyperbolic tangent
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_atanh/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.atanh(0.3);
            // *     returns 1: 0.3095196042031118
        
            return 0.5 * Math.log((1+arg)/(1-arg));
        },// }}}
        
        // {{{ base_convert
        base_convert: function(number, frombase, tobase) {
            // Convert a number between arbitrary bases
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_base_convert/
            // +       version: 810.612
            // +   original by: Philippe Baumann
            // *     example 1: $P.base_convert('A37334', 16, 2);
            // *     returns 1: '101000110111001100110100'
        
            return parseInt(number+'', frombase+0).toString(tobase+0);
        },// }}}
        
        // {{{ bindec
        bindec: function (binary_string) {
            // Binary to decimal
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_bindec/
            // +       version: 810.612
            // +   original by: Philippe Baumann
            // *     example 1: $P.bindec('110011');
            // *     returns 1: 51
            // *     example 2: $P.bindec('000110011');
            // *     returns 2: 51
            // *     example 3: $P.bindec('111');
            // *     returns 3: 7
        
            binary_string = (binary_string+'').replace(/[^01]/gi, '');
            return parseInt(binary_string, 2);
        },// }}}
        
        // {{{ ceil
        ceil: function(value) {
            // Round fractions up
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_ceil/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.ceil(8723321.4);
            // *     returns 1: 8723322
        
            return Math.ceil(value);
        },// }}}
        
        // {{{ cos
        cos: function(arg) {
            // Cosine
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_cos/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.cos(8723321.4);
            // *     returns 1: -0.18127180117607017
        
            return Math.cos(arg);
        },// }}}
        
        // {{{ cosh
        cosh: function(arg) {
            // Hyperbolic cosine
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_cosh/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.cosh(-0.18127180117607017);
            // *     returns 1: 1.0164747716114113
        
            return (Math.exp(arg) + Math.exp(-arg))/2;
        },// }}}
        
        // {{{ decbin
        decbin: function(number) {
            // Decimal to binary
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_decbin/
            // +       version: 811.1314
            // +   original by: Enrique Gonzalez
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.decbin(12);
            // *     returns 1: '1100'
            // *     example 2: $P.decbin(26);
            // *     returns 2: '11010'
            // *     example 3: $P.decbin('26');
            // *     returns 3: '11010'
            
            return parseInt(number).toString(2);
        },// }}}
        
        // {{{ dechex
        dechex: function(number) {
            // Decimal to hexadecimal
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_dechex/
            // +       version: 810.612
            // +   original by: Philippe Baumann
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.dechex(10);
            // *     returns 1: 'a'
            // *     example 2: $P.dechex(47);
            // *     returns 2: '2f'
            
            return parseInt(number).toString(16);
        },// }}}
        
        // {{{ decoct
        decoct: function(number) {
            // Decimal to octal
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_decoct/
            // +       version: 810.612
            // +   original by: Enrique Gonzalez
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.decoct(15);
            // *     returns 1: '17'
            // *     example 2: $P.decoct(264); 
            // *     returns 2: '410'
            
            return parseInt(number).toString(8);
        },// }}}
        
        // {{{ deg2rad
        deg2rad: function(angle) {
            // Converts the number in degrees to the radian equivalent
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_deg2rad/
            // +       version: 810.115
            // +   original by: Enrique Gonzalez
            // *     example 1: $P.deg2rad(45);
            // *     returns 1: 0.7853981633974483
            
            return (angle/180)*Math.PI;
        },// }}}
        
        // {{{ exp
        exp: function(arg) {
            // Calculates the exponent of e
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_exp/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.exp(0.3);
            // *     returns 1: 1.3498588075760032
        
            return Math.exp(arg);
        },// }}}
        
        // {{{ floor
        floor: function(value) {
            // Round fractions down
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_floor/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.floor(8723321.4);
            // *     returns 1: 8723321
            
            return Math.floor(value);
        },// }}}
        
        // {{{ fmod
        fmod: function(x, y) {
            // Returns the floating point remainder (modulo) of the division  of the arguments
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_fmod/
            // +       version: 810.612
            // +   original by: Onno Marsman
            // *     example 1: $P.fmod(5.7, 1.3);
            // *     returns 1: 0.5
            
            var tmp, tmp2, p = 0, pY = 0, l = 0.0, l2 = 0.0;
            
            tmp = x.toExponential().match(/^.\.?(.*)e(.+)$/);
            p = parseInt(tmp[2])-(tmp[1]+'').length;
            tmp = y.toExponential().match(/^.\.?(.*)e(.+)$/);
            pY = parseInt(tmp[2])-(tmp[1]+'').length;
            
            if (pY > p) {
                p = pY;
            }
            
            tmp2 = (x%y);
            
            if (p < -100 || p > 20) {
                // toFixed will give an out of bound error so we fix it like this:
                var l = Math.round(Math.log(tmp2)/Math.log(10));
                var l2 = Math.pow(10, l);
                
                return (tmp2/l2).toFixed(l-p)*l2;
            } else {
                return parseFloat(tmp2.toFixed(-p));
            }
        },// }}}
        
        // {{{ getrandmax
        getrandmax: function()
        {
            // Show largest possible random value
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_getrandmax/
            // +       version: 810.915
            // +   original by: Onno Marsman
            // *     example 1: $P.getrandmax();
            // *     returns 1: 2147483647
            return 2147483647;
        },// }}}
        
        // {{{ hexdec
        hexdec: function(hex_string) {
            // Hexadecimal to decimal
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_hexdec/
            // +       version: 810.300
            // +   original by: Philippe Baumann
            // *     example 1: $P.hexdec('that');
            // *     returns 1: 10
            // *     example 2: $P.hexdec('a0');
            // *     returns 2: 160
            
            hex_string = (hex_string+'').replace(/[^a-f0-9]/gi, '');
            return parseInt(hex_string, 16);
        },// }}}
        
        // {{{ hypot
        hypot: function(x, y) {
            // Calculate the length of the hypotenuse of a right-angle triangle
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_hypot/
            // +       version: 810.819
            // +   original by: Onno Marsman
            // *     example 1: $P.hypot(3, 4);
            // *     returns 1: 5
            // *     example 2: $P.hypot([], 'a');
            // *     returns 2: 0
        
            return Math.sqrt(x*x + y*y) || 0;
        },// }}}
        
        // {{{ is_finite
        is_finite: function(val) {
            // Finds whether a value is a legal finite number
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_finite/
            // +       version: 810.1310
            // +   original by: Onno Marsman
            // *     example 1: $P.is_finite(Infinity);
            // *     returns 1: false
            // *     example 2: $P.is_finite(-Infinity);
            // *     returns 2: false
            // *     example 3: $P.is_finite(0);
            // *     returns 3: true
        
            var warningType = '';
        
            if (val===Infinity || val===-Infinity) {
                return false;
            }
        
            //Some warnings for maximum PHP compatibility
            if (typeof val=='object') {
                warningType = (val instanceof Array ? 'array' : 'object');
            } else if (typeof val=='string' && !val.match(/^[\+\-]?\d/)) {
                //simulate PHP's behaviour: '-9a' doesn't give a warning, but 'a9' does.
                warningType = 'string';
            }
            if (warningType) {
                throw new Error('Warning: this.is_finite() expects parameter 1 to be double, '+warningType+' given');
            }
        
            return true;
        },// }}}
        
        // {{{ is_infinite
        is_infinite: function(val) {
            // Finds whether a value is infinite
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_infinite/
            // +       version: 810.1310
            // +   original by: Onno Marsman
            // *     example 1: $P.is_infinite(Infinity);
            // *     returns 1: true
            // *     example 2: $P.is_infinite(-Infinity);
            // *     returns 2: true
            // *     example 3: $P.is_infinite(0);
            // *     returns 3: false
        
            var warningType = '';
        
            if (val===Infinity || val===-Infinity) {
                return true;
            }
        
            //Some warnings for maximum PHP compatibility
            if (typeof val=='object') {
                warningType = (val instanceof Array ? 'array' : 'object');
            } else if (typeof val=='string' && !val.match(/^[\+\-]?\d/)) {
                //simulate PHP's behaviour: '-9a' doesn't give a warning, but 'a9' does.
                warningType = 'string';
            }
            if (warningType) {
                throw new Error('Warning: this.is_infinite() expects parameter 1 to be double, '+warningType+' given');
            }
        
            return false;
        },// }}}
        
        // {{{ is_nan
        is_nan: function(val) {
            // Finds whether a value is not a number
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_nan/
            // +       version: 810.1310
            // +   original by: Onno Marsman
            // +      input by: Robin
            // *     example 1: $P.is_nan(NaN);
            // *     returns 1: true
            // *     example 2: $P.is_nan(0);
            // *     returns 2: false
        
            var warningType = '';
        
            if (typeof val=='number' && isNaN(val)) {
                return true;
            }
        
            //Some errors for maximum PHP compatibility
            if (typeof val=='object') {
                warningType = (val instanceof Array ? 'array' : 'object');
            } else if (typeof val=='string' && !val.match(/^[\+\-]?\d/)) {
                //simulate PHP's behaviour: '-9a' doesn't give a warning, but 'a9' does.
                warningType = 'string';
            }
            if (warningType) {
                throw new Error('Warning: this.is_nan() expects parameter 1 to be double, '+warningType+' given');
            }
        
            return false;
        },// }}}
        
        // {{{ lcg_value
        lcg_value: function() {
            // Combined linear congruential generator
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_lcg_value/
            // +       version: 810.819
            // +   original by: Onno Marsman
        
            return Math.random();
        },// }}}
        
        // {{{ log
        log: function(arg, base) {
            // Natural logarithm
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_log/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.log(8723321.4, 7);
            // *     returns 1: 8.212871815082147
        
            if (base === undefined) {
                return Math.log(arg);
            } else {
                return Math.log(arg)/Math.log(base);
            }
        },// }}}
        
        // {{{ log10
        log10: function(arg) {
            // Base-10 logarithm
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_log10/
            // +       version: 811.1323
            // +   original by: Philip Peterson
            // +   improved by: Onno Marsman
            // +   improved by: Tod Gentille
            // *     example 1: $P.log10(10);
            // *     returns 1: 1
            // *     example 2: $P.log10(1);
            // *     returns 2: 0
        
            return Math.log(arg)/Math.LN10;
        },// }}}
        
        // {{{ max
        max: function() {
            // Find highest value
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_max/
            // +       version: 810.112
            // +   original by: Onno Marsman
            // +    revised by: Onno Marsman
            // +    tweaked by: Jack
            // %          note: Long code cause we're aiming for maximum PHP compatibility
            // *     example 1: $P.max(1, 3, 5, 6, 7);
            // *     returns 1: 7
            // *     example 2: $P.max([2, 4, 5]);
            // *     returns 2: 5
            // *     example 3: $P.max(0, 'hello');
            // *     returns 3: 0
            // *     example 4: $P.max('hello', 0);
            // *     returns 4: 'hello'
            // *     example 5: $P.max(-1, 'hello');
            // *     returns 5: 'hello'
            // *     example 6: $P.max([2, 4, 8], [2, 5, 7]);
            // *     returns 6: [2, 5, 7]
        
            var ar, retVal, i = 0, n = 0;
            var argv = arguments, argc = argv.length;
        
            var _obj2Array = function(obj) {
                if (obj instanceof Array) {
                    return obj;
                } else {
                    var ar = [];
                    for (var i in obj) {
                        ar.push(obj[i]);
                    }
                    return ar;
                }
            } //function _obj2Array
            
            var _compare = function(current, next) {
                var i = 0, n = 0, tmp = 0;
                var nl = 0, cl = 0;
                
                if (current === next) {
                    return 0;
                } else if (typeof current == 'object') {
                    if (typeof next == 'object') {
                       current = _obj2Array(current);
                       next    = _obj2Array(next);
                       cl      = current.length;
                       nl      = next.length;
                       if (nl > cl) {
                           return 1;
                       } else if (nl < cl) {
                           return -1;
                       } else {
                           for (i = 0, n = cl; i<n; ++i) {
                               tmp = _compare(current[i], next[i]);
                               if (tmp == 1) {
                                   return 1;
                               } else if (tmp == -1) {
                                   return -1;
                               }
                           }
                           return 0;
                       }
                    } else {
                       return -1;
                    }
                } else if (typeof next == 'object') {
                    return 1;
                } else if (isNaN(next) && !isNaN(current)) {
                    if (current == 0) {
                       return 0;
                    } else {
                       return (current<0 ? 1 : -1);
                    }
                } else if (isNaN(current) && !isNaN(next)) {
                    if (next==0) {
                       return 0;
                    } else {
                       return (next>0 ? 1 : -1);
                    }
                } else {
                    if (next==current) {
                       return 0;
                    } else {
                       return (next>current ? 1 : -1);
                    }
                }
            } //function _compare
            
            if (argc == 0) {
                throw new Error('At least one value should be passed to this.max()');
            } else if (argc == 1) {
                if (typeof argv[0]=='object') {
                    ar = _obj2Array(argv[0]);
                } else {
                    throw new Error('Wrong parameter count for this.max()');
                }
                if (ar.length == 0) {
                    throw new Error('Array must contain at least one element for this.max()');
                }
            } else {
                ar = argv;
            }
            
            retVal = ar[0];
            for (i=1, n=ar.length; i<n; ++i) {
                if (_compare(retVal, ar[i])==1) {
                    retVal = ar[i];
                }
            }
            
            return retVal;
        },// }}}
        
        // {{{ min
        min: function() {
            // Find lowest value
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_min/
            // +       version: 810.112
            // +   original by: Onno Marsman
            // +    revised by: Onno Marsman
            // +    tweaked by: Jack
            // %          note: Long code cause we're aiming for maximum PHP compatibility
            // *     example 1: $P.min(1, 3, 5, 6, 7);
            // *     returns 1: 1
            // *     example 2: $P.min([2, 4, 5]);
            // *     returns 2: 2
            // *     example 3: $P.min(0, 'hello');
            // *     returns 3: 0
            // *     example 4: $P.min('hello', 0);
            // *     returns 4: 'hello'
            // *     example 5: $P.min(-1, 'hello');
            // *     returns 5: -1
            // *     example 6: $P.min([2, 4, 8], [2, 5, 7]);
            // *     returns 6: [2, 4, 8]
            
            var ar, retVal, i = 0, n = 0;
            var argv = arguments, argc = argv.length;
        
            var _obj2Array = function(obj) {
                if (obj instanceof Array) {
                    return obj;
                } else {
                    var ar = [];
                    for (var i in obj) {
                        ar.push(obj[i]);
                    }
                    return ar;
                }
            } //function _obj2Array
            
            var _compare = function(current, next) {
                var i = 0, n = 0, tmp = 0;
                var nl = 0, cl = 0;
                
                if (current === next) {
                    return 0;
                } else if (typeof current == 'object') {
                    if (typeof next == 'object') {
                       current = _obj2Array(current);
                       next    = _obj2Array(next);
                       cl      = current.length;
                       nl      = next.length;
                       if (nl > cl) {
                           return 1;
                       } else if (nl < cl) {
                           return -1;
                       } else {
                           for (i = 0, n = cl; i<n; ++i) {
                               tmp = _compare(current[i], next[i]);
                               if (tmp == 1) {
                                   return 1;
                               } else if (tmp == -1) {
                                   return -1;
                               }
                           }
                           return 0;
                       }
                    } else {
                       return -1;
                    }
                } else if (typeof next == 'object') {
                    return 1;
                } else if (isNaN(next) && !isNaN(current)) {
                    if (current == 0) {
                       return 0;
                    } else {
                       return (current<0 ? 1 : -1);
                    }
                } else if (isNaN(current) && !isNaN(next)) {
                    if (next==0) {
                       return 0;
                    } else {
                       return (next>0 ? 1 : -1);
                    }
                } else {
                    if (next==current) {
                       return 0;
                    } else {
                       return (next>current ? 1 : -1);
                    }
                }
            } //function _compare
            
            if (argc == 0) {
                throw new Error('At least one value should be passed to this.min()');
            } else if (argc == 1) {
                if (typeof argv[0]=='object') {
                    ar = _obj2Array(argv[0]);
                } else {
                    throw new Error('Wrong parameter count for this.min()');
                }
                if (ar.length == 0) {
                    throw new Error('Array must contain at least one element for this.min()');
                }
            } else {
                ar = argv;
            }
            
            retVal = ar[0];
            for (i=1, n=ar.length; i<n; ++i) {
                if (_compare(retVal, ar[i])==-1) {
                    retVal = ar[i];
                }
            }
            
            return retVal;
        },// }}}
        
        // {{{ mt_getrandmax
        mt_getrandmax: function()
        {
            // Show largest possible random value
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_mt_getrandmax/
            // +       version: 810.915
            // +   original by: Onno Marsman
            // *     example 1: $P.mt_getrandmax();
            // *     returns 1: 2147483647
            return 2147483647;
        },// }}}
        
        // {{{ mt_rand
        mt_rand: function( min, max ) {
            // Generate a better random value
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_mt_rand/
            // +       version: 810.915
            // +   original by: Onno Marsman
            // *     example 1: $P.mt_rand(1, 1);
            // *     returns 1: 1
            var argc = arguments.length;
            if (argc == 0) {
                min = 0;
                max = 2147483647;
            } else if (argc == 1) {
                throw new Error('Warning: this.mt_rand() expects exactly 2 parameters, 1 given');
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },// }}}
        
        // {{{ octdec
        octdec: function (oct_string) {
            // Octal to decimal
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_octdec/
            // +       version: 810.612
            // +   original by: Philippe Baumann
            // *     example 1: $P.octdec('77');
            // *     returns 1: 63
        
            oct_string = (oct_string+'').replace(/[^0-7]/gi, '');
            return parseInt(oct_string, 8);
        },// }}}
        
        // {{{ pi
        pi: function() {
            // Get value of pi
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_pi/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.pi(8723321.4);
            // *     returns 1: 3.141592653589793
        
            return Math.PI;
        },// }}}
        
        // {{{ pow
        pow: function(base, exp) {
            // Exponential expression
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_pow/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.pow(8723321.4, 7);
            // *     returns 1: 3.843909168077899e+48
        
            return Math.pow(base, exp);
        },// }}}
        
        // {{{ rad2deg
        rad2deg: function(angle) {
            // Converts the radian number to the equivalent number in degrees
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_rad2deg/
            // +       version: 810.115
            // +   original by: Enrique Gonzalez
            // *     example 1: $P.rad2deg(3.141592653589793);
            // *     returns 1: 180
            
            return (angle/Math.PI) * 180;
        },// }}}
        
        // {{{ rand
        rand: function( min, max ) {
            // Generate a random integer
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_rand/
            // +       version: 810.915
            // +   original by: Leslie Hoare
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.rand(1, 1);
            // *     returns 1: 1
            var argc = arguments.length;
            if (argc == 0) {
                min = 0;
                max = 2147483647;
            } else if (argc == 1) {
                throw new Error('Warning: this.rand() expects exactly 2 parameters, 1 given');
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },// }}}
        
        // {{{ round
        round: function ( val, precision ) {
            // Rounds a float
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_round/
            // +       version: 809.2411
            // +   original by: Philip Peterson
            // +    revised by: Onno Marsman
            // *     example 1: $P.round(1241757, -3);
            // *     returns 1: 1242000
            // *     example 2: $P.round(3.6);
            // *     returns 2: 4
         
            return parseFloat(parseFloat(val).toFixed(precision));
        },// }}}
        
        // {{{ sin
        sin: function(arg) {
            // Sine
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_sin/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.sin(8723321.4);
            // *     returns 1: -0.9834330348825909
        
            return Math.sin(arg);
        },// }}}
        
        // {{{ sinh
        sinh: function(arg) {
            // Hyperbolic sine
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_sinh/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.sinh(-0.9834330348825909);
            // *     returns 1: -1.1497971402636502
        
            return (Math.exp(arg) - Math.exp(-arg))/2;
        },// }}}
        
        // {{{ sqrt
        sqrt: function(arg) {
            // Square root
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_sqrt/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.sqrt(8723321.4);
            // *     returns 1: 2953.5269424875746
            
            return Math.sqrt(arg);
        },// }}}
        
        // {{{ tan
        tan: function(arg) {
            // Tangent
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_tan/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.tan(8723321.4);
            // *     returns 1: 5.4251848798444815
        
            return Math.tan(arg);
        },// }}}
        
        // {{{ tanh
        tanh: function(arg) {
            // Hyperbolic tangent
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_tanh/
            // +       version: 809.2411
            // +   original by: Onno Marsman
            // *     example 1: $P.tanh(5.4251848798444815);
            // *     returns 1: 0.9999612058841574
        
            return (Math.exp(arg) - Math.exp(-arg)) / (Math.exp(arg) + Math.exp(-arg));
        },// }}}
        
        // {{{ constant
        constant: function(name) {
            // Returns the value of a constant
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_constant/
            // +       version: 812.311
            // +   original by: Paulo Ricardo F. Santos
            // *     example 1: $P.constant('IMAGINARY_CONSTANT1');
            // *     returns 1: null
        
            if (window[name] === undefined) {
                return null;
            }
        
            return window[name];
        },// }}}
        
        // define() is not available in the namespaced version of php.js
        
        // {{{ defined
        defined: function( constant_name )  {
            // Checks whether a given named constant exists
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_defined/
            // +       version: 811.1314
            // +   original by: Waldo Malqui Silva
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.defined('IMAGINARY_CONSTANT1');
            // *     returns 1: false
        
            return (typeof window[constant_name] !== 'undefined');
        },// }}}
        
        // {{{ sleep
        sleep: function(seconds) {
            // Delay execution
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_sleep/
            // +       version: 810.1311
            // +   original by: Christian Doebler
            // %          note: For study purposes. Current implementation could lock up the user's browser. 
            // %          note: Consider using setTimeout() instead.
            // *     example 1: $P.sleep(1);
            // *     returns 1: 0
            
            seconds *= 1000;
            var start = new Date().getTime();
            while (new Date().getTime() < start + seconds);
            
            return 0;
        },// }}}
        
        // {{{ ip2long
        ip2long: function ( ip_address ) {
            // Converts a string containing an (IPv4) Internet Protocol dotted address into a
            // proper address
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_ip2long/
            // +       version: 811.1314
            // +   original by: Waldo Malqui Silva
            // *     example 1: $P.ip2long( '192.0.34.166' );
            // *     returns 1: 3221234342
            
            var output = false;
         
            if ( ip_address.match ( /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/ ) ) {
              var parts  = ip_address.split ( '.' );
              var output = 0;
         
              output = ( parts [ 0 ] * Math.pow ( 256, 3 ) ) +
                       ( parts [ 1 ] * Math.pow ( 256, 2 ) ) +
                       ( parts [ 2 ] * Math.pow ( 256, 1 ) ) +
                       ( parts [ 3 ] * Math.pow ( 256, 0 ) );
            }
             
            return output;
        },// }}}
        
        // {{{ long2ip
        long2ip: function ( proper_address ) {
            // Converts an (IPv4) Internet network address into a string in Internet standard
            // dotted format
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_long2ip/
            // +       version: 811.1314
            // +   original by: Waldo Malqui Silva
            // *     example 1: $P.long2ip( 3221234342 );
            // *     returns 1: '192.0.34.166'
            
            var output = false;
            
            if ( !isNaN ( proper_address ) && ( proper_address >= 0 || proper_address <= 4294967295 ) ) {
                output = Math.floor (proper_address / Math.pow ( 256, 3 ) ) + '.' +
                    Math.floor ( ( proper_address % Math.pow ( 256, 3 ) ) / Math.pow ( 256, 2 ) ) + '.' +
                    Math.floor ( ( ( proper_address % Math.pow ( 256, 3 ) )  % Math.pow ( 256, 2 ) ) / Math.pow ( 256, 1 ) ) + '.' +
                    Math.floor ( ( ( ( proper_address % Math.pow ( 256, 3 ) ) % Math.pow ( 256, 2 ) ) % Math.pow ( 256, 1 ) ) / Math.pow ( 256, 0 ) );
            }
            
            return output;
        },// }}}
        
        // {{{ setcookie
        setcookie: function(name, value, expires, path, domain, secure) {
            // Send a cookie
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_setcookie/
            // +       version: 811.1314
            // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +   bugfixed by: Andreas
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.setcookie('author_name', 'Kevin van Zonneveld');
            // *     returns 1: true
        
            expires instanceof Date ? expires = expires.toGMTString() : typeof(expires) == 'number' && (expires = (new Date(+(new Date) + expires * 1e3)).toGMTString());
            var r = [name + "=" + encodeURIComponent(value)], s, i;
            for(i in s = {expires: expires, path: path, domain: domain}){
                s[i] && r.push(i + "=" + s[i]);
            }
            return secure && r.push("secure"), document.cookie = r.join(";"), true;
        },// }}}
        
        // {{{ preg_quote
        preg_quote: function( str ) {
            // Quote regular expression characters
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_preg_quote/
            // +       version: 810.819
            // +   original by: booeyOH
            // +   improved by: Ates Goral (http://magnetiq.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.preg_quote("$40");
            // *     returns 1: '\$40'
            // *     example 2: $P.preg_quote("*RRRING* Hello?");
            // *     returns 2: '\*RRRING\* Hello\?'
            // *     example 3: $P.preg_quote("\\.+*?[^]$(){}=!<>|:");
            // *     returns 3: '\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:'
        
            return (str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");
        },// }}}
        
        // {{{ addslashes
        addslashes: function( str ) {
            // Quote string with slashes
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_addslashes/
            // +       version: 809.2122
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Ates Goral (http://magnetiq.com)
            // +   improved by: marrtins
            // +   improved by: Nate
            // +   improved by: Onno Marsman
            // *     example 1: $P.addslashes("kevin's birthday");
            // *     returns 1: 'kevin\'s birthday'
         
            return (str+'').replace(/([\\"'])/g, "\\$1").replace(/\0/g, "\\0");
        },// }}}
        
        // {{{ bin2hex
        bin2hex: function(s){
            // Convert binary data into hexadecimal representation
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_bin2hex/
            // +       version: 811.2517
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +   bugfixed by: Linuxworld
            // *     example 1: $P.bin2hex('Kev');
            // *     returns 1: '4b6576'
            // *     example 2: $P.bin2hex(String.fromCharCode(0x00));
            // *     returns 2: '00'
        
            var v,i, f = 0, a = [];
            s += '';
            f = s.length;
            
            for (i = 0; i<f; i++) {
                a[i] = s.charCodeAt(i).toString(16).replace(/^([\da-f])$/,"0$1");
            }
            
            return a.join('');
        },// }}}
        
        // {{{ chop
        chop: function ( str, charlist ) {
            // Alias of rtrim()
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_chop/
            // +       version: 812.311
            // +   original by: Paulo Ricardo F. Santos
            // -    depends on: rtrim
            // *     example 1: $P.rtrim('    Kevin van Zonneveld    ');
            // *     returns 1: '    Kevin van Zonneveld'
        
            return this.rtrim(str, charlist || null);
        },// }}}
        
        // {{{ chr
        chr: function( ascii ) {
            // Return a specific character
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_chr/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.chr(75);
            // *     returns 1: 'K'
        
            return String.fromCharCode(ascii);
        },// }}}
        
        // {{{ count_chars
        count_chars: function( str, mode ) {
            // Return information about characters used in a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_count_chars/
            // +       version: 810.621
            // +   original by: Ates Goral (http://magnetiq.com)
            // +    tweaked by: Jack
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.count_chars("Hello World!", 1);
            // *     returns 1: "Hd e!lWor"
        
            var histogram = new Object(), tmp_arr = new Array();
            var key, i, code, mode, strl = 0;
            var argc = arguments.length;
        
            if (argc == 1) {
                mode = 0;
            }
        
            mode_even = (mode & 1) == 0;
            if (mode_even) {
                for (i = 1; i < 256; ++i) {
                    histogram[i] = 0;
                }
            }
        
            str += '';
        
            strl = str.length;
            for (i = 0; i < strl; ++i) {
                code = str.charCodeAt(i);
                if (code in histogram) {
                    ++histogram[code];
                } else {
                    histogram[code] = 1;
                }
            }
        
            if (mode > 0) {
                for (key in histogram) {
                    if (histogram[key] == 0 != mode_even) {
                        delete histogram[key];
                    }
                }
            }
        
            if (mode < 3) {
                return histogram;
            } else {
                for (key in histogram) {
                    tmp_arr.push(String.fromCharCode(key));
                }
                return tmp_arr.join("");
            }
        },// }}}
        
        // {{{ crc32
        crc32: function ( str ) {
            // Calculates the crc32 polynomial of a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_crc32/
            // +       version: 809.522
            // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
            // +   improved by: T0bsn
            // -    depends on: utf8_encode
            // *     example 1: $P.crc32('Kevin van Zonneveld');
            // *     returns 1: 1249991249
        
            str = this.utf8_encode(str);
            var table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";
        
            var crc = 0;
            var x = 0;
            var y = 0;
        
            crc = crc ^ (-1);
            for( var i = 0, iTop = str.length; i < iTop; i++ ) {
                y = ( crc ^ str.charCodeAt( i ) ) & 0xFF;
                x = "0x" + table.substr( y * 9, 8 );
                crc = ( crc >>> 8 ) ^ x;
            }
        
            return crc ^ (-1);
        },// }}}
        
        // {{{ echo
        echo: function ( ) {
            // Output one or more strings
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_echo/
            // +       version: 811.1400
            // +   original by: Philip Peterson
            // +   improved by: echo is bad
            // +   improved by: Nate
            // %        note 1: There are a few unsolved issues with this function. Summarizing:
            // %        note 1: converts all the special characters (e.g. tags) to HTML entities, 
            // %        note 1: thus reducing the usability of HTML formatting in echo().
            // %        note 1: 
            // %        note 1: InnerHTML() is better because it works (and it's fast),   
            // %        note 1: but using innerHTML on the BODY is very dangerous because
            // %        note 1: you will break all references to HTMLElements that were done before
            // %        note 1: 
            // %        note 1: There's no good place for a package like http://innerdom.sourceforge.net/
            // %        note 1: inside php.js
            // %        note 1:
            // *     example 1: $P.echo('Hello', 'World');
            // *     returns 1: null
            
            var arg = '', argc = arguments.length, argv = arguments, i = 0;
            var bodies = [], body, elmt;
            
            // .shift() does not work to get first item in bodies
            bodies = document.getElementsByTagName("body");
            if (!bodies || ! bodies[0]) {
                return false;
            }
            body   = bodies[0];
            
            for (i = 0; i < argc; i++ ) {
                arg = argv[i];
                if (document.createDocumentFragment && document.createTextNode && document.appendChild) {
                    var docFragment = document.createDocumentFragment();
                    var txt = document.createTextNode(arg);
                    docFragment.appendChild(txt);
                    document.body.appendChild(docFragment);
                } else if (document.write) {
                    document.write(arg);
                } else {
                    print(arg);
                }
            }
            
            return null;
        },// }}}
        
        // {{{ explode
        explode: function( delimiter, string, limit ) {
            // Split a string by string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_explode/
            // +       version: 809.522
            // +     original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +     improved by: kenneth
            // +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +     improved by: d3x
            // +     bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.explode(' ', 'Kevin van Zonneveld');
            // *     returns 1: {0: 'Kevin', 1: 'van', 2: 'Zonneveld'}
            // *     example 2: $P.explode('=', 'a=bc=d', 2);
            // *     returns 2: ['a', 'bc=d']
         
            var emptyArray = { 0: '' };
            
            // third argument is not required
            if ( arguments.length < 2
                || typeof arguments[0] == 'undefined'
                || typeof arguments[1] == 'undefined' )
            {
                return null;
            }
         
            if ( delimiter === ''
                || delimiter === false
                || delimiter === null )
            {
                return false;
            }
         
            if ( typeof delimiter == 'function'
                || typeof delimiter == 'object'
                || typeof string == 'function'
                || typeof string == 'object' )
            {
                return emptyArray;
            }
         
            if ( delimiter === true ) {
                delimiter = '1';
            }
            
            if (!limit) {
                return string.toString().split(delimiter.toString());
            } else {
                // support for limit argument
                var splitted = string.toString().split(delimiter.toString());
                var partA = splitted.splice(0, limit - 1);
                var partB = splitted.join(delimiter.toString());
                partA.push(partB);
                return partA;
            }
        },// }}}
        
        // {{{ get_html_translation_table
        get_html_translation_table: function(table, quote_style) {
            // Returns the translation table used by htmlspecialchars() and htmlentities()
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_get_html_translation_table/
            // +       version: 811.1314
            // +   original by: Philip Peterson
            // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: noname
            // %          note: It has been decided that we're not going to add global
            // %          note: dependencies to php.js. Meaning the constants are not
            // %          note: real constants, but strings instead. integers are also supported if someone
            // %          note: chooses to create the constants themselves.
            // %          note: Table from http://www.the-art-of-web.com/html/character-codes/
            // *     example 1: $P.get_html_translation_table('HTML_SPECIALCHARS');
            // *     returns 1: {'"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'}
            
            var entities = {}, histogram = {}, decimal = 0, symbol = '';
            var constMappingTable = {}, constMappingQuoteStyle = {};
            var useTable = {}, useQuoteStyle = {};
            
            useTable      = (table ? table.toUpperCase() : 'HTML_SPECIALCHARS');
            useQuoteStyle = (quote_style ? quote_style.toUpperCase() : 'ENT_COMPAT');
            
            // Translate arguments
            constMappingTable[0]      = 'HTML_SPECIALCHARS';
            constMappingTable[1]      = 'HTML_ENTITIES';
            constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
            constMappingQuoteStyle[2] = 'ENT_COMPAT';
            constMappingQuoteStyle[3] = 'ENT_QUOTES';
            
            // Map numbers to strings for compatibilty with PHP constants
            if (!isNaN(useTable)) {
                useTable = constMappingTable[useTable];
            }
            if (!isNaN(useQuoteStyle)) {
                useQuoteStyle = constMappingQuoteStyle[useQuoteStyle];
            }
            
            if (useTable == 'HTML_SPECIALCHARS') {
                // ascii decimals for better compatibility
                entities['38'] = '&amp;';
                entities['60'] = '&lt;';
                entities['62'] = '&gt;';
            } else if (useTable == 'HTML_ENTITIES') {
                // ascii decimals for better compatibility
                entities['38'] = '&amp;';
                entities['60'] = '&lt;';
                entities['62'] = '&gt;';
                entities['160'] = '&nbsp;';
                entities['161'] = '&iexcl;';
                entities['162'] = '&cent;';
                entities['163'] = '&pound;';
                entities['164'] = '&curren;';
                entities['165'] = '&yen;';
                entities['166'] = '&brvbar;';
                entities['167'] = '&sect;';
                entities['168'] = '&uml;';
                entities['169'] = '&copy;';
                entities['170'] = '&ordf;';
                entities['171'] = '&laquo;';
                entities['172'] = '&not;';
                entities['173'] = '&shy;';
                entities['174'] = '&reg;';
                entities['175'] = '&macr;';
                entities['176'] = '&deg;';
                entities['177'] = '&plusmn;';
                entities['178'] = '&sup2;';
                entities['179'] = '&sup3;';
                entities['180'] = '&acute;';
                entities['181'] = '&micro;';
                entities['182'] = '&para;';
                entities['183'] = '&middot;';
                entities['184'] = '&cedil;';
                entities['185'] = '&sup1;';
                entities['186'] = '&ordm;';
                entities['187'] = '&raquo;';
                entities['188'] = '&frac14;';
                entities['189'] = '&frac12;';
                entities['190'] = '&frac34;';
                entities['191'] = '&iquest;';
                entities['192'] = '&Agrave;';
                entities['193'] = '&Aacute;';
                entities['194'] = '&Acirc;';
                entities['195'] = '&Atilde;';
                entities['196'] = '&Auml;';
                entities['197'] = '&Aring;';
                entities['198'] = '&AElig;';
                entities['199'] = '&Ccedil;';
                entities['200'] = '&Egrave;';
                entities['201'] = '&Eacute;';
                entities['202'] = '&Ecirc;';
                entities['203'] = '&Euml;';
                entities['204'] = '&Igrave;';
                entities['205'] = '&Iacute;';
                entities['206'] = '&Icirc;';
                entities['207'] = '&Iuml;';
                entities['208'] = '&ETH;';
                entities['209'] = '&Ntilde;';
                entities['210'] = '&Ograve;';
                entities['211'] = '&Oacute;';
                entities['212'] = '&Ocirc;';
                entities['213'] = '&Otilde;';
                entities['214'] = '&Ouml;';
                entities['215'] = '&times;';
                entities['216'] = '&Oslash;';
                entities['217'] = '&Ugrave;';
                entities['218'] = '&Uacute;';
                entities['219'] = '&Ucirc;';
                entities['220'] = '&Uuml;';
                entities['221'] = '&Yacute;';
                entities['222'] = '&THORN;';
                entities['223'] = '&szlig;';
                entities['224'] = '&agrave;';
                entities['225'] = '&aacute;';
                entities['226'] = '&acirc;';
                entities['227'] = '&atilde;';
                entities['228'] = '&auml;';
                entities['229'] = '&aring;';
                entities['230'] = '&aelig;';
                entities['231'] = '&ccedil;';
                entities['232'] = '&egrave;';
                entities['233'] = '&eacute;';
                entities['234'] = '&ecirc;';
                entities['235'] = '&euml;';
                entities['236'] = '&igrave;';
                entities['237'] = '&iacute;';
                entities['238'] = '&icirc;';
                entities['239'] = '&iuml;';
                entities['240'] = '&eth;';
                entities['241'] = '&ntilde;';
                entities['242'] = '&ograve;';
                entities['243'] = '&oacute;';
                entities['244'] = '&ocirc;';
                entities['245'] = '&otilde;';
                entities['246'] = '&ouml;';
                entities['247'] = '&divide;';
                entities['248'] = '&oslash;';
                entities['249'] = '&ugrave;';
                entities['250'] = '&uacute;';
                entities['251'] = '&ucirc;';
                entities['252'] = '&uuml;';
                entities['253'] = '&yacute;';
                entities['254'] = '&thorn;';
                entities['255'] = '&yuml;';
            } else {
                throw Error("Table: "+useTable+' not supported');
                return false;
            }
            
            if (useQuoteStyle != 'ENT_NOQUOTES') {
                entities['34'] = '&quot;';
            }
            
            if (useQuoteStyle == 'ENT_QUOTES') {
                entities['39'] = '&#039;';
            }
            
            // ascii decimals to real symbols
            for (decimal in entities) {
                symbol = String.fromCharCode(decimal)
                histogram[symbol] = entities[decimal];
            }
            
            return histogram;
        },// }}}
        
        // {{{ html_entity_decode
        html_entity_decode: function( string, quote_style ) {
            // Convert all HTML entities to their applicable characters
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_html_entity_decode/
            // +       version: 810.2018
            // +   original by: john (http://www.jd-tech.net)
            // +      input by: ger
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +   improved by: marc andreu
            // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: get_html_translation_table
            // *     example 1: $P.html_entity_decode('Kevin &amp; van Zonneveld');
            // *     returns 1: 'Kevin & van Zonneveld'
        
            var histogram = {}, symbol = '', tmp_str = '', i = 0;
            tmp_str = string.toString();
            
            if (false === (histogram = this.get_html_translation_table('HTML_ENTITIES', quote_style))) {
                return false;
            }
            
            for (symbol in histogram) {
                entity = histogram[symbol];
                tmp_str = tmp_str.split(entity).join(symbol);
            }
            
            return tmp_str;
        },// }}}
        
        // {{{ htmlentities
        htmlentities: function (string, quote_style) {
            // Convert all applicable characters to HTML entities
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_htmlentities/
            // +       version: 810.2018
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: nobbler
            // +    tweaked by: Jack
            // +   bugfixed by: Onno Marsman
            // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: get_html_translation_table
            // *     example 1: $P.htmlentities('Kevin & van Zonneveld');
            // *     returns 1: 'Kevin &amp; van Zonneveld'
        
            var histogram = {}, symbol = '', tmp_str = '', i = 0;
            tmp_str = string.toString();
            
            if (false === (histogram = this.get_html_translation_table('HTML_ENTITIES', quote_style))) {
                return false;
            }
            
            for (symbol in histogram) {
                entity = histogram[symbol];
                tmp_str = tmp_str.split(symbol).join(entity);
            }
            
            return tmp_str;
        },// }}}
        
        // {{{ htmlspecialchars
        htmlspecialchars: function (string, quote_style) {
            // Convert special characters to HTML entities
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_htmlspecialchars/
            // +       version: 810.2018
            // +   original by: Mirek Slugen
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Nathan
            // +   bugfixed by: Arno
            // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: get_html_translation_table
            // *     example 1: $P.htmlspecialchars("<a href='test'>Test</a>", 'ENT_QUOTES');
            // *     returns 1: '&lt;a href=&#039;test&#039;&gt;Test&lt;/a&gt;'
        
            var histogram = {}, symbol = '', tmp_str = '', i = 0;
            tmp_str = string.toString();
            
            if (false === (histogram = this.get_html_translation_table('HTML_SPECIALCHARS', quote_style))) {
                return false;
            }
            
            for (symbol in histogram) {
                entity = histogram[symbol];
                tmp_str = tmp_str.split(symbol).join(entity);
            }
            
            return tmp_str;
        },// }}}
        
        // {{{ htmlspecialchars_decode
        htmlspecialchars_decode: function(string, quote_style) {
            // Convert special HTML entities back to characters
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_htmlspecialchars_decode/
            // +       version: 810.2018
            // +   original by: Mirek Slugen
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Mateusz "loonquawl" Zalega
            // +      input by: ReverseSyntax
            // +      input by: Slawomir Kaniecki
            // +      input by: Scott Cariss
            // +      input by: Francois
            // +   bugfixed by: Onno Marsman
            // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: get_html_translation_table
            // *     example 1: $P.htmlspecialchars_decode("<p>this -&gt; &quot;</p>", 'ENT_NOQUOTES');
            // *     returns 1: '<p>this -> &quot;</p>'
        
            var histogram = {}, symbol = '', tmp_str = '', i = 0;
            tmp_str = string.toString();
            
            if (false === (histogram = this.get_html_translation_table('HTML_SPECIALCHARS', quote_style))) {
                return false;
            }
            
            for (symbol in histogram) {
                entity = histogram[symbol];
                tmp_str = tmp_str.split(entity).join(symbol);
            }
            
            return tmp_str;
        },// }}}
        
        // {{{ implode
        implode: function( glue, pieces ) {
            // Join array elements with a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_implode/
            // +       version: 811.1314
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Waldo Malqui Silva
            // *     example 1: $P.implode(' ', ['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: 'Kevin van Zonneveld'
        
            return ( ( pieces instanceof Array ) ? pieces.join ( glue ) : pieces );
        },// }}}
        
        // {{{ join
        join: function( glue, pieces ) {
            // Alias of implode()
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_join/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: implode
            // *     example 1: $P.join(' ', ['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: 'Kevin van Zonneveld'
        
            return this.implode( glue, pieces );
        },// }}}
        
        // {{{ levenshtein
        levenshtein: function( str1, str2 ) {
            // Calculate Levenshtein distance between two strings
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_levenshtein/
            // +       version: 810.621
            // +   original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.levenshtein('Kevin van Zonneveld', 'Kevin van Sommeveld');
            // *     returns 1: 3
        
            var s, l = (s = (str1+'').split("")).length, t = (str2 = (str2+'').split("")).length, i, j, m, n;
            if(!(l || t)) return Math.max(l, t);
            for(var a = [], i = l + 1; i; a[--i] = [i]);
            for(i = t + 1; a[0][--i] = i;);
            for(i = -1, m = s.length; ++i < m;){
                for(j = -1, n = str2.length; ++j < n;){
                    a[(i *= 1) + 1][(j *= 1) + 1] = Math.min(a[i][j + 1] + 1, a[i + 1][j] + 1, a[i][j] + (s[i] != str2[j]));
                }
            }
            return a[l][t];
        },// }}}
        
        // {{{ ltrim
        ltrim: function ( str, charlist ) {
            // Strip whitespace (or other characters) from the beginning of a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_ltrim/
            // +       version: 810.621
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Erkekjetter
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.ltrim('    Kevin van Zonneveld    ');
            // *     returns 1: 'Kevin van Zonneveld    '
        
            charlist = !charlist ? ' \s\xA0' : (charlist+'').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
            var re = new RegExp('^[' + charlist + ']+', 'g');
            return (str+'').replace(re, '');
        },// }}}
        
        // {{{ md5
        md5: function ( str ) {
            // Calculate the md5 hash of a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_md5/
            // +       version: 810.112
            // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
            // + namespaced by: Michael White (http://getsprink.com)
            // +    tweaked by: Jack
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: utf8_encode
            // *     example 1: $P.md5('Kevin van Zonneveld');
            // *     returns 1: '6e658d4bfcb59cc13f96c14450ac40b9'
        
            var RotateLeft = function(lValue, iShiftBits) {
                return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
            };
        
            var AddUnsigned = function(lX,lY) {
                var lX4,lY4,lX8,lY8,lResult;
                lX8 = (lX & 0x80000000);
                lY8 = (lY & 0x80000000);
                lX4 = (lX & 0x40000000);
                lY4 = (lY & 0x40000000);
                lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
                if (lX4 & lY4) {
                    return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
                }
                if (lX4 | lY4) {
                    if (lResult & 0x40000000) {
                        return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                    } else {
                        return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                    }
                } else {
                    return (lResult ^ lX8 ^ lY8);
                }
            };
        
            var F = function(x,y,z) { return (x & y) | ((~x) & z); };
            var G = function(x,y,z) { return (x & z) | (y & (~z)); };
            var H = function(x,y,z) { return (x ^ y ^ z); };
            var I = function(x,y,z) { return (y ^ (x | (~z))); };
        
            var FF = function(a,b,c,d,x,s,ac) {
                a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
                return AddUnsigned(RotateLeft(a, s), b);
            };
        
            var GG = function(a,b,c,d,x,s,ac) {
                a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
                return AddUnsigned(RotateLeft(a, s), b);
            };
        
            var HH = function(a,b,c,d,x,s,ac) {
                a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
                return AddUnsigned(RotateLeft(a, s), b);
            };
        
            var II = function(a,b,c,d,x,s,ac) {
                a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
                return AddUnsigned(RotateLeft(a, s), b);
            };
        
            var ConvertToWordArray = function(str) {
                var lWordCount;
                var lMessageLength = str.length;
                var lNumberOfWords_temp1=lMessageLength + 8;
                var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
                var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
                var lWordArray=Array(lNumberOfWords-1);
                var lBytePosition = 0;
                var lByteCount = 0;
                while ( lByteCount < lMessageLength ) {
                    lWordCount = (lByteCount-(lByteCount % 4))/4;
                    lBytePosition = (lByteCount % 4)*8;
                    lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount)<<lBytePosition));
                    lByteCount++;
                }
                lWordCount = (lByteCount-(lByteCount % 4))/4;
                lBytePosition = (lByteCount % 4)*8;
                lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
                lWordArray[lNumberOfWords-2] = lMessageLength<<3;
                lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
                return lWordArray;
            };
        
            var WordToHex = function(lValue) {
                var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
                for (lCount = 0;lCount<=3;lCount++) {
                    lByte = (lValue>>>(lCount*8)) & 255;
                    WordToHexValue_temp = "0" + lByte.toString(16);
                    WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
                }
                return WordToHexValue;
            };
        
            var x=Array();
            var k,AA,BB,CC,DD,a,b,c,d;
            var S11=7, S12=12, S13=17, S14=22;
            var S21=5, S22=9 , S23=14, S24=20;
            var S31=4, S32=11, S33=16, S34=23;
            var S41=6, S42=10, S43=15, S44=21;
        
            str = this.utf8_encode(str);
            x = ConvertToWordArray(str);
            a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
            
            xl = x.length;
            for (k=0;k<xl;k+=16) {
                AA=a; BB=b; CC=c; DD=d;
                a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
                d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
                c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
                b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
                a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
                d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
                c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
                b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
                a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
                d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
                c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
                b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
                a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
                d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
                c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
                b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
                a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
                d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
                c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
                b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
                a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
                d=GG(d,a,b,c,x[k+10],S22,0x2441453);
                c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
                b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
                a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
                d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
                c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
                b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
                a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
                d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
                c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
                b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
                a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
                d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
                c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
                b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
                a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
                d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
                c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
                b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
                a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
                d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
                c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
                b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
                a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
                d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
                c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
                b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
                a=II(a,b,c,d,x[k+0], S41,0xF4292244);
                d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
                c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
                b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
                a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
                d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
                c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
                b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
                a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
                d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
                c=II(c,d,a,b,x[k+6], S43,0xA3014314);
                b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
                a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
                d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
                c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
                b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
                a=AddUnsigned(a,AA);
                b=AddUnsigned(b,BB);
                c=AddUnsigned(c,CC);
                d=AddUnsigned(d,DD);
            }
        
            var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
        
            return temp.toLowerCase();
        },// }}}
        
        // {{{ md5_file
        md5_file: function ( str_filename ) {
            // Calculates the md5 hash of a given file
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_md5_file/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: file_get_contents
            // -    depends on: md5
            // *     example 1: $P.md5_file('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
            // *     returns 1: '202cb962ac59075b964b07152d234b70'
        
            buf = this.file_get_contents(str_filename);
            
            if (!buf) {
                return false;
            }
            
            return this.md5(buf);
        },// }}}
        
        // {{{ nl2br
        nl2br: function (str, is_xhtml) {
            // Inserts HTML line breaks before all newlines in a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_nl2br/
            // +       version: 810.1417
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Philip Peterson
            // +   improved by: Onno Marsman
            // +   improved by: Atli Þór
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.nl2br('Kevin\nvan\nZonneveld');
            // *     returns 1: 'Kevin<br />\nvan<br />\nZonneveld'
            // *     example 2: $P.nl2br("\nOne\nTwo\n\nThree\n", false);
            // *     returns 2: '<br>\nOne<br>\nTwo<br>\n<br>\nThree<br>\n'
            // *     example 3: $P.nl2br("\nOne\nTwo\n\nThree\n", true);
            // *     returns 3: '<br />\nOne<br />\nTwo<br />\n<br />\nThree<br />\n'
        
            breakTag = '<br />';
            if (typeof is_xhtml != 'undefined' && !is_xhtml) {
                breakTag = '<br>';
            }
        
            return (str + '').replace(/([^>]?)\n/g, '$1'+ breakTag +'\n');
        },// }}}
        
        // {{{ number_format
        number_format: function( number, decimals, dec_point, thousands_sep ) {
            // Format a number with grouped thousands
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_number_format/
            // +       version: 809.2411
            // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +     bugfix by: Michael White (http://getsprink.com)
            // +     bugfix by: Benjamin Lupton
            // +     bugfix by: Allan Jensen (http://www.winternet.no)
            // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +     bugfix by: Howard Yeend
            // *     example 1: $P.number_format(1234.5678, 2, '.', '');
            // *     returns 1: 1234.57     
        
            var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
            var d = dec_point == undefined ? "." : dec_point;
            var t = thousands_sep == undefined ? "," : thousands_sep, s = n < 0 ? "-" : "";
            var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
            
            return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
        },// }}}
        
        // {{{ ord
        ord: function( string ) {
            // Return ASCII value of character
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_ord/
            // +       version: 810.621
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.ord('K');
            // *     returns 1: 75
        
            return (string+'').charCodeAt(0);
        },// }}}
        
        // {{{ parse_str
        parse_str: function(str, array){
            // Parses the string into variables
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_parse_str/
            // +       version: 810.621
            // +   original by: Cagri Ekin
            // +   improved by: Michael White (http://getsprink.com)
            // +    tweaked by: Jack
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.parse_str('first=foo&second=bar');
            // *     returns 1: { first: 'foo', second: 'bar' }
            // *     example 2: $P.parse_str('str_a=Jack+and+Jill+didn%27t+see+the+well.');
            // *     returns 2: { str_a: "Jack and Jill didn't see the well." }
        
            var glue1 = '=';
            var glue2 = '&';
        
            var array2 = (str+'').split(glue2);
            var array3 = [];
            var array2l = 0, tmp = '', x = 0;
        
            array2l = array2.length;
            for (x = 0; x<array2l; x++) {
                tmp = array2[x].split(glue1);
                array3[unescape(tmp[0])] = unescape(tmp[1]).replace(/[+]/g, ' ');
            }
        
            if (array) {
                array = array3;
            } else {
                return array3;
            }
        },// }}}
        
        // {{{ printf
        printf: function( ) {
            // Output a formatted string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_printf/
            // +       version: 809.2411
            // +   original by: Ash Searle (http://hexmen.com/blog/)
            // +   improved by: Michael White (http://getsprink.com)
            // -    depends on: sprintf
            // *     example 1: $P.printf("%01.2f", 123.1);
            // *     returns 1: 6
        
            var bodies = [], body, elmt;
            var ret = '';
            
            // .shift() does not work to get first item in bodies
            bodies = document.getElementsByTagName("body");
            if (!bodies || ! bodies[0]) {
                return false;
            }
            body   = bodies[0];
            
            
            ret = this.sprintf.apply(this, arguments);
        
            elmt = document.createTextNode(ret);
            body.appendChild(elmt);
            
            return ret.length;
        },// }}}
        
        // {{{ quotemeta
        quotemeta: function(str) {
            // Quote meta characters
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_quotemeta/
            // +       version: 812.311
            // +   original by: Paulo Ricardo F. Santos
            // *     example 1: $P.quotemeta(". + * ? ^ ( $ )");
            // *     returns 1: '\. \+ \* \? \^ \( \$ \)'
        
            return (str+'').replace(/([\.\\\+\*\?\[\^\]\$\(\)])/g, '\\$1');
        },// }}}
        
        // {{{ rtrim
        rtrim: function ( str, charlist ) {
            // Strip whitespace (or other characters) from the end of a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_rtrim/
            // +       version: 810.621
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Erkekjetter
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.rtrim('    Kevin van Zonneveld    ');
            // *     returns 1: '    Kevin van Zonneveld'
        
            charlist = !charlist ? ' \s\xA0' : (charlist+'').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
            var re = new RegExp('[' + charlist + ']+$', 'g');
            return (str+'').replace(re, '');
        },// }}}
        
        // {{{ sha1
        sha1: function ( str ) {
            // Calculate the sha1 hash of a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_sha1/
            // +       version: 810.112
            // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
            // + namespaced by: Michael White (http://getsprink.com)
            // -    depends on: utf8_encode
            // *     example 1: $P.sha1('Kevin van Zonneveld');
            // *     returns 1: '54916d2e62f65b3afa6e192e6a601cdbe5cb5897'
        
            var rotate_left = function(n,s) {
                var t4 = ( n<<s ) | (n>>>(32-s));
                return t4;
            };
        
            var lsb_hex = function(val) {
                var str="";
                var i;
                var vh;
                var vl;
        
                for( i=0; i<=6; i+=2 ) {
                    vh = (val>>>(i*4+4))&0x0f;
                    vl = (val>>>(i*4))&0x0f;
                    str += vh.toString(16) + vl.toString(16);
                }
                return str;
            };
        
            var cvt_hex = function(val) {
                var str="";
                var i;
                var v;
        
                for( i=7; i>=0; i-- ) {
                    v = (val>>>(i*4))&0x0f;
                    str += v.toString(16);
                }
                return str;
            };
        
            var blockstart;
            var i, j;
            var W = new Array(80);
            var H0 = 0x67452301;
            var H1 = 0xEFCDAB89;
            var H2 = 0x98BADCFE;
            var H3 = 0x10325476;
            var H4 = 0xC3D2E1F0;
            var A, B, C, D, E;
            var temp;
        
            str = this.utf8_encode(str);
            var str_len = str.length;
        
            var word_array = new Array();
            for( i=0; i<str_len-3; i+=4 ) {
                j = str.charCodeAt(i)<<24 | str.charCodeAt(i+1)<<16 |
                str.charCodeAt(i+2)<<8 | str.charCodeAt(i+3);
                word_array.push( j );
            }
        
            switch( str_len % 4 ) {
                case 0:
                    i = 0x080000000;
                break;
                case 1:
                    i = str.charCodeAt(str_len-1)<<24 | 0x0800000;
                break;
                case 2:
                    i = str.charCodeAt(str_len-2)<<24 | str.charCodeAt(str_len-1)<<16 | 0x08000;
                break;
                case 3:
                    i = str.charCodeAt(str_len-3)<<24 | str.charCodeAt(str_len-2)<<16 | str.charCodeAt(str_len-1)<<8    | 0x80;
                break;
            }
        
            word_array.push( i );
        
            while( (word_array.length % 16) != 14 ) word_array.push( 0 );
        
            word_array.push( str_len>>>29 );
            word_array.push( (str_len<<3)&0x0ffffffff );
        
            for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {
                for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
                for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
        
                A = H0;
                B = H1;
                C = H2;
                D = H3;
                E = H4;
        
                for( i= 0; i<=19; i++ ) {
                    temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotate_left(B,30);
                    B = A;
                    A = temp;
                }
        
                for( i=20; i<=39; i++ ) {
                    temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotate_left(B,30);
                    B = A;
                    A = temp;
                }
        
                for( i=40; i<=59; i++ ) {
                    temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotate_left(B,30);
                    B = A;
                    A = temp;
                }
        
                for( i=60; i<=79; i++ ) {
                    temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotate_left(B,30);
                    B = A;
                    A = temp;
                }
        
                H0 = (H0 + A) & 0x0ffffffff;
                H1 = (H1 + B) & 0x0ffffffff;
                H2 = (H2 + C) & 0x0ffffffff;
                H3 = (H3 + D) & 0x0ffffffff;
                H4 = (H4 + E) & 0x0ffffffff;
            }
        
            var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
            return temp.toLowerCase();
        },// }}}
        
        // {{{ sha1_file
        sha1_file: function ( str_filename ) {
            // Calculate the sha1 hash of a file
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_sha1_file/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: file_get_contents
            // -    depends on: sha1
            // *     example 1: $P.sha1_file('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
            // *     returns 1: '40bd001563085fc35165329ea1ff5c5ecbdbbeef'
        
            var buf = this.file_get_contents(str_filename);
            return this.sha1(buf);
        },// }}}
        
        // {{{ soundex
        soundex: function(str) {
            // Calculate the soundex key of a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_soundex/
            // +       version: 810.621
            // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +    tweaked by: Jack
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.soundex('Kevin');
            // *     returns 1: 'K150'
            // *     example 2: $P.soundex('Ellery');
            // *     returns 2: 'E460'
            // *     example 3: $P.soundex('Euler');
            // *     returns 3: 'E460'
        
            var i, j, l, r, p = isNaN(p) ? 4 : p > 10 ? 10 : p < 4 ? 4 : p;
            var m = {BFPV: 1, CGJKQSXZ: 2, DT: 3, L: 4, MN: 5, R: 6};
            var r = (s = (str+'').toUpperCase().replace(/[^A-Z]/g, "").split("")).splice(0, 1);
            var sl = 0;
        
            sl = s.length;
            for (i = -1, l = sl; ++i < l;) {
                for (j in m) {
                    if (j.indexOf(s[i]) + 1 && r[r.length-1] != m[j] && r.push(m[j])) {
                        break;
                    }
                }
            }
        
            return r.length > p && (r.length = p), r.join("") + (new Array(p - r.length + 1)).join("0");
        },// }}}
        
        // {{{ split
        split: function( delimiter, string ) {
            // Split string into array by regular expression
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_split/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: explode
            // *     example 1: $P.split(' ', 'Kevin van Zonneveld');
            // *     returns 1: {0: 'Kevin', 1: 'van', 2: 'Zonneveld'}
        
            return this.explode( delimiter, string );
        },// }}}
        
        // {{{ sprintf
        sprintf: function( ) {
            // Return a formatted string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_sprintf/
            // +       version: 812.114
            // +   original by: Ash Searle (http://hexmen.com/blog/)
            // + namespaced by: Michael White (http://getsprink.com)
            // +    tweaked by: Jack
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Paulo Ricardo F. Santos
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.sprintf("%01.2f", 123.1);
            // *     returns 1: 123.10
            // *     example 2: $P.sprintf("[%10s]", 'monkey');
            // *     returns 2: '[    monkey]'
            // *     example 3: $P.sprintf("[%'#10s]", 'monkey');
            // *     returns 3: '[####monkey]'
        
            var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;
            var a = arguments, i = 0, format = a[i++];
        
            // pad()
            var pad = function(str, len, chr, leftJustify) {
                if (!chr) chr = ' ';
                var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
                return leftJustify ? str + padding : padding + str;
            };
        
            // justify()
            var justify = function(value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
                var diff = minWidth - value.length;
                if (diff > 0) {
                    if (leftJustify || !zeroPad) {
                        value = pad(value, minWidth, customPadChar, leftJustify);
                    } else {
                        value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
                    }
                }
                return value;
            };
        
            // formatBaseX()
            var formatBaseX = function(value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
                // Note: casts negative numbers to positive ones
                var number = value >>> 0;
                prefix = prefix && number && {'2': '0b', '8': '0', '16': '0x'}[base] || '';
                value = prefix + pad(number.toString(base), precision || 0, '0', false);
                return justify(value, prefix, leftJustify, minWidth, zeroPad);
            };
        
            // formatString()
            var formatString = function(value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
                if (precision != null) {
                    value = value.slice(0, precision);
                }
                return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
            };
        
            // finalFormat()
            var doFormat = function(substring, valueIndex, flags, minWidth, _, precision, type) {
                if (substring == '%%') return '%';
        
                // parse flags
                var leftJustify = false, positivePrefix = '', zeroPad = false, prefixBaseX = false, customPadChar = ' ';
                var flagsl = flags.length;
                for (var j = 0; flags && j < flagsl; j++) switch (flags.charAt(j)) {
                    case ' ': positivePrefix = ' '; break;
                    case '+': positivePrefix = '+'; break;
                    case '-': leftJustify = true; break;
                    case "'": customPadChar = flags.charAt(j+1); break;
                    case '0': zeroPad = true; break;
                    case '#': prefixBaseX = true; break;
                }
        
                // parameters may be null, undefined, empty-string or real valued
                // we want to ignore null, undefined and empty-string values
                if (!minWidth) {
                    minWidth = 0;
                } else if (minWidth == '*') {
                    minWidth = +a[i++];
                } else if (minWidth.charAt(0) == '*') {
                    minWidth = +a[minWidth.slice(1, -1)];
                } else {
                    minWidth = +minWidth;
                }
        
                // Note: undocumented perl feature:
                if (minWidth < 0) {
                    minWidth = -minWidth;
                    leftJustify = true;
                }
        
                if (!isFinite(minWidth)) {
                    throw new Error('this.sprintf: (minimum-)width must be finite');
                }
        
                if (!precision) {
                    precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type == 'd') ? 0 : void(0);
                } else if (precision == '*') {
                    precision = +a[i++];
                } else if (precision.charAt(0) == '*') {
                    precision = +a[precision.slice(1, -1)];
                } else {
                    precision = +precision;
                }
        
                // grab value using valueIndex if required?
                var value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];
        
                switch (type) {
                    case 's': return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
                    case 'c': return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
                    case 'b': return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                    case 'o': return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                    case 'x': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                    case 'X': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
                    case 'u': return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                    case 'i':
                    case 'd': {
                        var number = parseInt(+value);
                        var prefix = number < 0 ? '-' : positivePrefix;
                        value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                        return justify(value, prefix, leftJustify, minWidth, zeroPad);
                    }
                    case 'e':
                    case 'E':
                    case 'f':
                    case 'F':
                    case 'g':
                    case 'G': {
                        var number = +value;
                        var prefix = number < 0 ? '-' : positivePrefix;
                        var method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                        var textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                        value = prefix + Math.abs(number)[method](precision);
                        return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
                    }
                    default: return substring;
                }
            };
        
            return format.replace(regex, doFormat);
        },// }}}
        
        // {{{ str_ireplace
        str_ireplace: function ( search, replace, subject ) {
            // Case-insensitive version of str_replace().
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_str_ireplace/
            // +       version: 810.621
            // +   original by: Martijn Wieringa
            // +      input by: penutbutterjelly
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    tweaked by: Jack
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.str_ireplace('l', 'l', 'HeLLo');
            // *     returns 1: 'Hello'
        
            var i, k = '';
            var searchl = 0;
        
            search += '';
            searchl = search.length;
            if (!(replace instanceof Array)) {
                replace = new Array(replace);
                if (search instanceof Array) {
                    // If search is an array and replace is a string,
                    // then this replacement string is used for every value of search
                    while (searchl > replace.length) {
                        replace[replace.length] = replace[0];
                    }
                }
            }
        
            if (!(search instanceof Array)) {
                search = new Array(search);
            }
            while (search.length>replace.length) {
                // If replace has fewer values than search,
                // then an empty string is used for the rest of replacement values
                replace[replace.length] = '';
            }
        
            if (subject instanceof Array) {
                // If subject is an array, then the search and replace is performed
                // with every entry of subject , and the return value is an array as well.
                for (k in subject) {
                    subject[k] = this.str_ireplace(search, replace, subject[k]);
                }
                return subject;
            }
        
            searchl = search.length;
            for (i = 0; i < searchl; i++) {
                reg = new RegExp(search[i], 'gi');
                subject = subject.replace(reg, replace[i]);
            }
        
            return subject;
        },// }}}
        
        // {{{ str_pad
        str_pad: function( input, pad_length, pad_string, pad_type ) {
            // Pad a string to a certain length with another string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_str_pad/
            // +       version: 810.819
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // + namespaced by: Michael White (http://getsprink.com)
            // *     example 1: $P.str_pad('Kevin van Zonneveld', 30, '-=', 'STR_PAD_LEFT');
            // *     returns 1: '-=-=-=-=-=-Kevin van Zonneveld'
            // *     example 2: $P.str_pad('Kevin van Zonneveld', 30, '-', 'STR_PAD_BOTH');
            // *     returns 2: '------Kevin van Zonneveld-----'
        
            var half = '', pad_to_go;
        
            var str_pad_repeater = function(s, len) {
                var collect = '', i;
        
                while(collect.length < len) collect += s;
                collect = collect.substr(0,len);
        
                return collect;
            };
        
            input += '';
        
            if (pad_type != 'STR_PAD_LEFT' && pad_type != 'STR_PAD_RIGHT' && pad_type != 'STR_PAD_BOTH') { pad_type = 'STR_PAD_RIGHT'; }
            if ((pad_to_go = pad_length - input.length) > 0) {
                if (pad_type == 'STR_PAD_LEFT') { input = str_pad_repeater(pad_string, pad_to_go) + input; }
                else if (pad_type == 'STR_PAD_RIGHT') { input = input + str_pad_repeater(pad_string, pad_to_go); }
                else if (pad_type == 'STR_PAD_BOTH') {
                    half = str_pad_repeater(pad_string, Math.ceil(pad_to_go/2));
                    input = half + input + half;
                    input = input.substr(0, pad_length);
                }
            }
        
            return input;
        },// }}}
        
        // {{{ str_repeat
        str_repeat: function ( input, multiplier ) {
            // Repeat a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_str_repeat/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // *     example 1: $P.str_repeat('-=', 10);
            // *     returns 1: '-=-=-=-=-=-=-=-=-=-='
            
            
            return new Array(multiplier+1).join(input); 
        },// }}}
        
        // {{{ str_replace
        str_replace: function(search, replace, subject) {
            // Replace all occurrences of the search string with the replacement string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_str_replace/
            // +       version: 810.819
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Gabriel Paderni
            // +   improved by: Philip Peterson
            // +   improved by: Simon Willison (http://simonwillison.net)
            // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +   bugfixed by: Anton Ongson
            // +      input by: Onno Marsman
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    tweaked by: Onno Marsman
            // *     example 1: $P.str_replace(' ', '.', 'Kevin van Zonneveld');
            // *     returns 1: 'Kevin.van.Zonneveld'
            // *     example 2: $P.str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
            // *     returns 2: 'hemmo, mars'
        
            var f = search, r = replace, s = subject;
            var ra = r instanceof Array, sa = s instanceof Array, f = [].concat(f), r = [].concat(r), i = (s = [].concat(s)).length;
        
            while (j = 0, i--) {
                if (s[i]) {
                    while (s[i] = s[i].split(f[j]).join(ra ? r[j] || "" : r[0]), ++j in f){};
                }
            };
        
            return sa ? s : s[0];
        },// }}}
        
        // {{{ str_rot13
        str_rot13: function( str ) {
            // Perform the rot13 transform on a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_str_rot13/
            // +       version: 810.621
            // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +   improved by: Ates Goral (http://magnetiq.com)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.str_rot13('Kevin van Zonneveld');
            // *     returns 1: 'Xriva ina Mbaariryq'
            // *     example 2: $P.str_rot13('Xriva ina Mbaariryq');
            // *     returns 2: 'Kevin van Zonneveld'
        
            return (str+'').replace(/[A-Za-z]/g, function (c) {
                return String.fromCharCode((((c = c.charCodeAt(0)) & 223) - 52) % 26 + (c & 32) + 65);
            });
        },// }}}
        
        // {{{ str_split
        str_split: function ( f_string, f_split_length){
            // Convert a string to an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_str_split/
            // +       version: 810.621
            // +     original by: Martijn Wieringa
            // +     improved by: Brett Zamir
            // +     bugfixed by: Onno Marsman
            // *         example 1: $P.str_split('Hello Friend', 3);
            // *         returns 1: ['Hel', 'lo ', 'Fri', 'end']
        
            f_string += '';
        
            if (f_split_length == undefined) {
                f_split_length = 1;
            }
            if(f_split_length > 0){
                var result = [];
                while(f_string.length > f_split_length) {
                    result[result.length] = f_string.substring(0, f_split_length);
                    f_string = f_string.substring(f_split_length);
                }
                result[result.length] = f_string;
                return result;
            }
            return false;
        },// }}}
        
        // {{{ strcasecmp
        strcasecmp: function (f_string1, f_string2){
            // Binary safe case-insensitive string comparison
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strcasecmp/
            // +       version: 810.621
            // +     original by: Martijn Wieringa
            // +     bugfixed by: Onno Marsman
            // *         example 1: $P.strcasecmp('Hello', 'hello');
            // *         returns 1: 0
        
            var string1 = (f_string1+'').toLowerCase();
            var string2 = (f_string2+'').toLowerCase();
        
            if(string1 > string2) {
              return 1;
            }
            else if(string1 == string2) {
              return 0;
            }
        
            return -1;
        },// }}}
        
        // {{{ strchr
        strchr: function ( haystack, needle, bool ) {
            // Alias of strstr()
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strchr/
            // +       version: 809.522
            // +   original by: Philip Peterson
            // -    depends on: strstr
            // *     example 1: $P.strchr('Kevin van Zonneveld', 'van');
            // *     returns 1: 'van Zonneveld'
            // *     example 2: $P.strchr('Kevin van Zonneveld', 'van', true);
            // *     returns 2: 'Kevin '
         
            return this.strstr( haystack, needle, bool );
        },// }}}
        
        // {{{ strcmp
        strcmp: function ( str1, str2 ) {
            // Binary safe string comparison
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strcmp/
            // +       version: 811.1314
            // +   original by: Waldo Malqui Silva
            // +      input by: Steve Hilder
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    revised by: gorthaur
            // *     example 1: $P.strcmp( 'waldo', 'owald' );
            // *     returns 1: 1
            // *     example 2: $P.strcmp( 'owald', 'waldo' );
            // *     returns 2: -1
        
            return ( ( str1 == str2 ) ? 0 : ( ( str1 > str2 ) ? 1 : -1 ) );
        },// }}}
        
        // {{{ strip_tags
        strip_tags: function(str, allowed_tags) {
            // Strip HTML and PHP tags from a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strip_tags/
            // +       version: 811.1812
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Luke Godfrey
            // +      input by: Pul
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +      input by: Alex
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Marc Palau
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>');
            // *     returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
            // *     example 2: $P.strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>');
            // *     returns 2: '<p>Kevin van Zonneveld</p>'
            // *     example 3: $P.strip_tags("<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>", "<a>");
            // *     returns 3: '<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>'
        
            var key = '', tag = '', allowed = false;
            var matches = allowed_array = [];
        
            var replacer = function(search, replace, str) {
                return str.split(search).join(replace);
            };
        
            // Build allowes tags associative array
            if (allowed_tags) {
                allowed_array = allowed_tags.match(/([a-zA-Z]+)/gi);
            }
            
            str += '';
        
            // Match tags
            matches = str.match(/(<\/?[^>]+>)/gi);
        
            // Go through all HTML tags
            for (key in matches) {
                if (isNaN(key)) {
                    // IE7 Hack
                    continue;
                }
        
                // Save HTML tag
                html = matches[key].toString();
        
                // Is tag not in allowed list? Remove from str!
                allowed = false;
        
                // Go through all allowed tags
                for (k in allowed_array) {
                    // Init
                    allowed_tag = allowed_array[k];
                    i = -1;
        
                    if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+'>');}
                    if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+' ');}
                    if (i != 0) { i = html.toLowerCase().indexOf('</'+allowed_tag)   ;}
        
                    // Determine
                    if (i == 0) {
                        allowed = true;
                        break;
                    }
                }
        
                if (!allowed) {
                    str = replacer(html, "", str); // Custom replace. No regexing
                }
            }
        
            return str;
        },// }}}
        
        // {{{ stripos
        stripos: function ( f_haystack, f_needle, f_offset ){
            // Find position of first occurrence of a case-insensitive string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_stripos/
            // +       version: 810.617
            // +     original by: Martijn Wieringa
            // +      revised by: Onno Marsman
            // *         example 1: $P.stripos('ABC', 'a');
            // *         returns 1: 0
        
            var haystack = (f_haystack+'').toLowerCase();
            var needle = (f_needle+'').toLowerCase();
            var index = 0;
         
            if ((index = haystack.indexOf(needle, f_offset)) !== -1) {
                return index;
            }
            return false;
        },// }}}
        
        // {{{ stripslashes
        stripslashes: function( str ) {
            // Un-quote string quoted with addslashes()
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_stripslashes/
            // +       version: 810.612
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Ates Goral (http://magnetiq.com)
            // +      fixed by: Mick@el
            // +   improved by: marrtins
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.stripslashes('Kevin\'s code');
            // *     returns 1: "Kevin's code"
        
            return (str+'').replace('/\0/g', '0').replace('/\(.)/g', '$1');
        },// }}}
        
        // {{{ stristr
        stristr: function( haystack, needle, bool ) {
            // Case-insensitive strstr()
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_stristr/
            // +       version: 810.819
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfxied by: Onno Marsman
            // *     example 1: $P.stristr('Kevin van Zonneveld', 'Van');
            // *     returns 1: 'van Zonneveld'
            // *     example 2: $P.stristr('Kevin van Zonneveld', 'VAN', true);
            // *     returns 2: 'Kevin '
        
            var pos = 0;
        
            haystack += '';
            pos = haystack.toLowerCase().indexOf( (needle+'').toLowerCase() );
            if( pos == -1 ){
                return false;
            } else{
                if( bool ){
                    return haystack.substr( 0, pos );
                } else{
                    return haystack.slice( pos );
                }
            }
        },// }}}
        
        // {{{ strlen
        strlen: function (string) {
            // Get string length
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strlen/
            // +       version: 810.616
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Sakimori
            // +      input by: Kirk Strobeck
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.strlen('Kevin van Zonneveld');
            // *     returns 1: 19
        
            return (string+'').length;
        },// }}}
        
        // {{{ strnatcmp
        strnatcmp: function ( f_string1, f_string2, f_version ) {
            // String comparisons using a &quot;natural order&quot; algorithm
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strnatcmp/
            // +       version: 810.819
            // +   original by: Martijn Wieringa
            // + namespaced by: Michael White (http://getsprink.com)
            // +    tweaked by: Jack
            // +   bugfixed by: Onno Marsman
            // -    depends on: strcmp
            // %          note: Added f_version argument against code guidelines, because it's so neat
            // *     example 1: $P.strnatcmp('Price 12.9', 'Price 12.15');
            // *     returns 1: 1
            // *     example 2: $P.strnatcmp('Price 12.09', 'Price 12.15');
            // *     returns 2: -1
            // *     example 3: $P.strnatcmp('Price 12.90', 'Price 12.15');
            // *     returns 3: 1
            // *     example 4: $P.strnatcmp('Version 12.9', 'Version 12.15', true);
            // *     returns 4: -6
            // *     example 5: $P.strnatcmp('Version 12.15', 'Version 12.9', true);
            // *     returns 5: 6
        
            if (f_version == undefined) {
                f_version = false;
            }
        
            var __strnatcmp_split = function( f_string ) {
                var result = new Array();
                var buffer = '';
                var chr = '';
                var i = 0, f_stringl = 0;
        
                var text = true;
        
                f_stringl = f_string.length;
                for (i = 0; i < f_stringl; i++) {
                    chr = f_string.substring(i, i + 1);
                    if (chr.match(/[0-9]/)) {
                        if (text) {
                            if(buffer.length > 0){
                                result[result.length] = buffer;
                                buffer = '';
                            }
        
                            text = false;
                        }
                        buffer += chr;
                    } else if ((text == false) && (chr == '.') && (i < (f_string.length - 1)) && (f_string.substring(i + 1, i + 2).match(/[0-9]/))) {
                        result[result.length] = buffer;
                        buffer = '';
                    } else {
                        if (text == false) {
                            if (buffer.length > 0) {
                                result[result.length] = parseInt(buffer);
                                buffer = '';
                            }
                            text = true;
                        }
                        buffer += chr;
                    }
                }
        
                if (buffer.length > 0) {
                    if (text) {
                        result[result.length] = buffer;
                    } else {
                        result[result.length] = parseInt(buffer);
                    }
                }
        
                return result;
            };
        
            var array1 = __strnatcmp_split(f_string1+'');
            var array2 = __strnatcmp_split(f_string2+'');
        
            var len = array1.length;
            var text = true;
        
            var result = -1;
            var r = 0;
        
            if (len > array2.length) {
                len = array2.length;
                result = 1;
            }
        
            for (i = 0; i < len; i++) {
                if (isNaN(array1[i])) {
                    if (isNaN(array2[i])) {
                        text = true;
        
                        if ((r = this.strcmp(array1[i], array2[i])) != 0) {
                            return r;
                        }
                    } else if (text){
                        return 1;
                    } else {
                        return -1;
                    }
                } else if (isNaN(array2[i])) {
                    if(text) {
                        return -1;
                    } else{
                        return 1;
                    }
                } else {
                    if(text || f_version){
                        if ((r = (array1[i] - array2[i])) != 0) {
                            return r;
                        }
                    } else {
                        if ((r = this.strcmp(array1[i].toString(), array2[i].toString())) != 0) {
                            return r;
                        }
                    }
        
                    text = false;
                }
            }
        
            return result;
        },// }}}
        
        // {{{ strncasecmp
        strncasecmp: function (str1, str2, len) {
            // Binary safe case-insensitive string comparison of the first n characters
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strncasecmp/
            // +       version: 810.819
            // +   original by: Saulo Vallory
            // +      input by: Nate
            // +   bugfixed by: Onno Marsman
            // %          note: Returns < 0 if str1 is less than str2 ; > 0 if str1 is greater than str2 , and 0 if they are equal.
            // *     example 1: $P.strncasecmp('Price 12.9', 'Price 12.15', 2);
            // *     returns 1: 0
            // *     example 2: $P.strncasecmp('Price 12.09', 'Price 12.15', 10);
            // *     returns 2: -1
            // *     example 3: $P.strncasecmp('Price 12.90', 'Price 12.15', 30);
            // *     returns 3: 8
            // *     example 4: $P.strncasecmp('Version 12.9', 'Version 12.15', 20);
            // *     returns 4: 8
            // *     example 5: $P.strncasecmp('Version 12.15', 'Version 12.9', 20);
            // *     returns 5: -8
        
            var diff;
            str1 = (str1+'').toLowerCase().substr(0,len);
            str2 = (str2+'').toLowerCase().substr(0,len);
        
            if(str1.length !== str2.length) {
                if(str1.length < str2.length) {
                    len = str1.length;
                    if(str2.substr(0, str1.length) == str1) {
                        return str1.length - str2.length; // return the difference of chars
                    }
                } else {
                    len = str2.length;
                    // str1 is longer than str2
                    if(str1.substr(0, str2.length) == str2) {
                        return str1.length - str2.length; // return the difference of chars
                    }
                }
            } else {
                // Avoids trying to get a char that does not exist
                len = str1.length;
            }
        
            for(diff = 0, i=0; i < len; i++) {
                diff = str1.charCodeAt(i) - str2.charCodeAt(i);
                if(diff !== 0) {
                    return diff;
                }
            }
        
            return 0;
        },// }}}
        
        // {{{ strpbrk
        strpbrk: function( haystack, char_list ) {
            // Search a string for any of a set of characters
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strpbrk/
            // +       version: 810.819
            // +   original by: Alfonso Jimenez (http://www.alfonsojimenez.com)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.strpbrk('This is a Simple text.', 'is');
            // *     returns 1: 'is is a Simple text.'
        
            haystack += '';
            char_list += '';
            var lon = haystack.length;
            var lon_search = char_list.length;
            var ret = false;
            var stack = '';
        
            if (lon >= lon_search) {
                if (lon == lon_search) {
                    if (haystack == char_list){
                        ret = haystack;
                    }
                } else {
                    j = 0;
                    i = 0;
                    while (i < lon_search && j < lon && !ret) {
                        if (char_list[i] == haystack[j]) {
                            i++;
                            if (i == lon_search) {
                                ret = true;
                            }
                        }
                        j++;
                    }
                    if (ret) {
                        for(i = (j-lon_search); i < lon; i++){
                            stack += haystack[i];
                        }
                    }
                    if (stack != '') {
                        ret = stack;
                    }
                }
            }
            return ret;
        },// }}}
        
        // {{{ strpos
        strpos: function( haystack, needle, offset){
            // Find position of first occurrence of a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strpos/
            // +       version: 810.612
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Onno Marsman    
            // *     example 1: $P.strpos('Kevin van Zonneveld', 'e', 5);
            // *     returns 1: 14
        
            var i = (haystack+'').indexOf( needle, offset ); 
            return i===-1 ? false : i;
        },// }}}
        
        // {{{ strrev
        strrev: function( string ){
            // Reverse a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strrev/
            // +       version: 810.819
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.strrev('Kevin van Zonneveld');
            // *     returns 1: 'dlevennoZ nav niveK'
        
            var ret = '', i = 0;
        
            string += '';
            for ( i = string.length-1; i >= 0; i-- ){
               ret += string.charAt(i);
            }
        
            return ret;
        },// }}}
        
        // {{{ strripos
        strripos: function( haystack, needle, offset){
            // Find position of last occurrence of a case-insensitive string in a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strripos/
            // +       version: 810.620
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.strripos('Kevin van Zonneveld', 'E');
            // *     returns 1: 16
        
            var i = (haystack+'').toLowerCase().lastIndexOf( (needle+'').toLowerCase(), offset ); // returns -1
            return i >= 0 ? i : false;
        },// }}}
        
        // {{{ strrpos
        strrpos: function( haystack, needle, offset){
            // Find position of last occurrence of a char in a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strrpos/
            // +       version: 810.819
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.strrpos('Kevin van Zonneveld', 'e');
            // *     returns 1: 16
        
            var i = (haystack+'').lastIndexOf( needle, offset ); // returns -1
            return i >= 0 ? i : false;
        },// }}}
        
        // {{{ strstr
        strstr: function( haystack, needle, bool ) {
            // Find first occurrence of a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strstr/
            // +       version: 810.819
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.strstr('Kevin van Zonneveld', 'van');
            // *     returns 1: 'van Zonneveld'
            // *     example 2: $P.strstr('Kevin van Zonneveld', 'van', true);
            // *     returns 2: 'Kevin '
        
            var pos = 0;
        
            haystack += '';
            pos = haystack.indexOf( needle );
            if( pos == -1 ){
                return false;
            } else{
                if( bool ){
                    return haystack.substr( 0, pos );
                } else{
                    return haystack.slice( pos );
                }
            }
        },// }}}
        
        // {{{ strtolower
        strtolower: function( str ) {
            // Make a string lowercase
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strtolower/
            // +       version: 809.2912
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Onno Marsman
            // *     example 1: $P.strtolower('Kevin van Zonneveld');
            // *     returns 1: 'kevin van zonneveld'
        
            return (str+'').toLowerCase();
        },// }}}
        
        // {{{ strtoupper
        strtoupper: function( str ) {
            // Make a string uppercase
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strtoupper/
            // +       version: 809.2912
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Onno Marsman
            // *     example 1: $P.strtoupper('Kevin van Zonneveld');
            // *     returns 1: 'KEVIN VAN ZONNEVELD'
        
            return (str+'').toUpperCase();
        },// }}}
        
        // {{{ substr
        substr: function( f_string, f_start, f_length ) {
            // Return part of a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_substr/
            // +       version: 810.819
            // +     original by: Martijn Wieringa
            // +     bugfixed by: T.Wild
            // +      tweaked by: Onno Marsman
            // *       example 1: $P.substr('abcdef', 0, -1);
            // *       returns 1: 'abcde'
            // *       example 2: $P.substr(2, 0, -6);
            // *       returns 2: ''
        
            f_string += '';
        
            if(f_start < 0) {
                f_start += f_string.length;
            }
        
            if(f_length == undefined) {
                f_length = f_string.length;
            } else if(f_length < 0){
                f_length += f_string.length;
            } else {
                f_length += f_start;
            }
        
            if(f_length < f_start) {
                f_length = f_start;
            }
        
            return f_string.substring(f_start, f_length);
        },// }}}
        
        // {{{ substr_count
        substr_count: function( haystack, needle, offset, length ) {
            // Count the number of substring occurrences
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_substr_count/
            // +       version: 810.819
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.substr_count('Kevin van Zonneveld', 'e');
            // *     returns 1: 3
            // *     example 2: $P.substr_count('Kevin van Zonneveld', 'K', 1);
            // *     returns 2: 0
            // *     example 3: $P.substr_count('Kevin van Zonneveld', 'Z', 0, 10);
            // *     returns 3: false
        
            var pos = 0, cnt = 0;
        
            haystack += '';
            needle += '';
            if(isNaN(offset)) offset = 0;
            if(isNaN(length)) length = 0;
            offset--;
        
            while( (offset = haystack.indexOf(needle, offset+1)) != -1 ){
                if(length > 0 && (offset+needle.length) > length){
                    return false;
                } else{
                    cnt++;
                }
            }
        
            return cnt;
        },// }}}
        
        // {{{ trim
        trim: function (str, charlist) {
            // Strip whitespace (or other characters) from the beginning and end of a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_trim/
            // +       version: 810.2018
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: mdsjack (http://www.mdsjack.bo.it)
            // +   improved by: Alexander Ermolaev (http://snippets.dzone.com/user/AlexanderErmolaev)
            // +      input by: Erkekjetter
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: DxGx
            // +   improved by: Steven Levithan (http://blog.stevenlevithan.com)
            // +    tweaked by: Jack
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.trim('    Kevin van Zonneveld    ');
            // *     returns 1: 'Kevin van Zonneveld'
            // *     example 2: $P.trim('Hello World', 'Hdle');
            // *     returns 2: 'o Wor'
            // *     example 3: $P.trim(16, 1);
            // *     returns 3: 6
        
            var whitespace, l = 0, i = 0;
            str += '';
            
            if (!charlist) {
                // default list
                whitespace = " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
            } else {
                // preg_quote custom list
                charlist += '';
                whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
            }
            
            l = str.length;
            for (i = 0; i < l; i++) {
                if (whitespace.indexOf(str.charAt(i)) === -1) {
                    str = str.substring(i);
                    break;
                }
            }
            
            l = str.length;
            for (i = l - 1; i >= 0; i--) {
                if (whitespace.indexOf(str.charAt(i)) === -1) {
                    str = str.substring(0, i + 1);
                    break;
                }
            }
            
            return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
        },// }}}
        
        // {{{ ucfirst
        ucfirst: function( str ) {
            // Make a string&#039;s first character uppercase
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_ucfirst/
            // +       version: 810.819
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.ucfirst('kevin van zonneveld');
            // *     returns 1: 'Kevin van zonneveld'
        
            str += '';
            var f = str.charAt(0).toUpperCase();
            return f + str.substr(1, str.length-1);
        },// }}}
        
        // {{{ ucwords
        ucwords: function( str ) {
            // Uppercase the first character of each word in a string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_ucwords/
            // +       version: 811.1314
            // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +   improved by: Waldo Malqui Silva
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.ucwords('kevin van zonneveld');
            // *     returns 1: 'Kevin Van Zonneveld'
            // *     example 2: $P.ucwords('HELLO WORLD');
            // *     returns 2: 'HELLO WORLD'
        
            return (str+'').replace(/^(.)|\s(.)/g, function ( $1 ) { return $1.toUpperCase ( ); } );
        },// }}}
        
        // {{{ wordwrap
        wordwrap: function( str, int_width, str_break, cut ) {
            // Wraps a string to a given number of characters
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_wordwrap/
            // +       version: 810.819
            // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +   improved by: Nick Callen
            // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Sakimori
            // *     example 1: $P.wordwrap('Kevin van Zonneveld', 6, '|', true);
            // *     returns 1: 'Kevin |van |Zonnev|eld'
            // *     example 2: $P.wordwrap('The quick brown fox jumped over the lazy dog.', 20, '<br />\n');
            // *     returns 2: 'The quick brown fox <br />\njumped over the lazy<br />\n dog.'
            // *     example 3: $P.wordwrap('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
            // *     returns 3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \nveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \ncommodo consequat.'
        
            // PHP Defaults
            var m = ((arguments.length >= 2) ? arguments[1] : 75   );
            var b = ((arguments.length >= 3) ? arguments[2] : "\n" );
            var c = ((arguments.length >= 4) ? arguments[3] : false);
        
            var i, j, l, s, r;
        
            str += '';
        
            if (m < 1) {
                return str;
            }
        
            for (i = -1, l = (r = str.split("\n")).length; ++i < l; r[i] += s) {
                for(s = r[i], r[i] = ""; s.length > m; r[i] += s.slice(0, j) + ((s = s.slice(j)).length ? b : "")){
                    j = c == 2 || (j = s.slice(0, m + 1).match(/\S*(\s)?$/))[1] ? m : j.input.length - j[0].length || c == 1 && m || j.input.length + (j = s.slice(m).match(/^\S*/)).input.length;
                }
            }
        
            return r.join("\n");
        },// }}}
        
        // {{{ base64_decode
        base64_decode: function( data ) {
            // Decodes data encoded with MIME base64
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_base64_decode/
            // +       version: 810.819
            // +   original by: Tyler Akins (http://rumkin.com)
            // +   improved by: Thunder.m
            // +      input by: Aman Gupta
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // -    depends on: utf8_decode
            // *     example 1: $P.base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
            // *     returns 1: 'Kevin van Zonneveld'
        
            // mozilla has this native
            // - but breaks in 2.0.0.12!
            //if (typeof window['btoa'] == 'function') {
            //    return btoa(data);
            //}
        
            var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var o1, o2, o3, h1, h2, h3, h4, bits, i = ac = 0, dec = "", tmp_arr = [];
        
            data += '';
        
            do {  // unpack four hexets into three octets using index points in b64
                h1 = b64.indexOf(data.charAt(i++));
                h2 = b64.indexOf(data.charAt(i++));
                h3 = b64.indexOf(data.charAt(i++));
                h4 = b64.indexOf(data.charAt(i++));
        
                bits = h1<<18 | h2<<12 | h3<<6 | h4;
        
                o1 = bits>>16 & 0xff;
                o2 = bits>>8 & 0xff;
                o3 = bits & 0xff;
        
                if (h3 == 64) {
                    tmp_arr[ac++] = String.fromCharCode(o1);
                } else if (h4 == 64) {
                    tmp_arr[ac++] = String.fromCharCode(o1, o2);
                } else {
                    tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
                }
            } while (i < data.length);
        
            dec = tmp_arr.join('');
            dec = this.utf8_decode(dec);
        
            return dec;
        },// }}}
        
        // {{{ base64_encode
        base64_encode: function( data ) {
            // Encodes data with MIME base64
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_base64_encode/
            // +       version: 809.522
            // +   original by: Tyler Akins (http://rumkin.com)
            // +   improved by: Bayron Guevara
            // +   improved by: Thunder.m
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)        
            // -    depends on: utf8_encode
            // *     example 1: $P.base64_encode('Kevin van Zonneveld');
            // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
        
            // mozilla has this native
            // - but breaks in 2.0.0.12!
            //if (typeof window['atob'] == 'function') {
            //    return atob(data);
            //}
                
            var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var o1, o2, o3, h1, h2, h3, h4, bits, i = ac = 0, enc="", tmp_arr = [];
            data = this.utf8_encode(data);
            
            do { // pack three octets into four hexets
                o1 = data.charCodeAt(i++);
                o2 = data.charCodeAt(i++);
                o3 = data.charCodeAt(i++);
        
                bits = o1<<16 | o2<<8 | o3;
        
                h1 = bits>>18 & 0x3f;
                h2 = bits>>12 & 0x3f;
                h3 = bits>>6 & 0x3f;
                h4 = bits & 0x3f;
        
                // use hexets to index into b64, and append result to encoded string
                tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
            } while (i < data.length);
            
            enc = tmp_arr.join('');
            
            switch( data.length % 3 ){
                case 1:
                    enc = enc.slice(0, -2) + '==';
                break;
                case 2:
                    enc = enc.slice(0, -1) + '=';
                break;
            }
        
            return enc;
        },// }}}
        
        // {{{ get_headers
        get_headers: function(url, format) {
            // Fetches all the headers sent by the server in response to a HTTP request
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_get_headers/
            // +       version: 812.311
            // +   original by: Paulo Ricardo F. Santos
            // %        note 1: This uses: function XmlHttpRequest and cannot retrieve resource from different domain.
            // %        note 1: Synchronous so may lock up browser, mainly here for study purposes.
            // *     example 1: $P.get_headers('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
            // *     returns 1: '123'
            
            var req = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
            if (!req) throw new Error('XMLHttpRequest not supported');
            var tmp, headers, pair, i;
        
            req.open('HEAD', url, false);
            req.send(null);
        
        
            if (req.readyState < 3) {
                return false;
            }
        
            tmp     = req.getAllResponseHeaders();
            tmp     = tmp.split('\n');
            headers = {0 : req.status + ' ' + req.statusText};
        
            for (i in tmp) {
                pair = tmp[i].split(':', 2);
                headers[(format) ? pair[0] : headers.length] = (pair[1]+'').replace(/^\s+|\s+$/g, '');
            }
        
            return headers;
        },// }}}
        
        // {{{ http_build_query
        http_build_query: function( formdata, numeric_prefix, arg_separator ) {
            // Generate URL-encoded query string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_http_build_query/
            // +       version: 809.2411
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Legaev Andrey
            // +   improved by: Michael White (http://getsprink.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: urlencode
            // *     example 1: $P.http_build_query({foo: 'bar', php: 'hypertext processor', baz: 'boom', cow: 'milk'}, '', '&amp;');
            // *     returns 1: 'foo=bar&amp;php=hypertext+processor&amp;baz=boom&amp;cow=milk'
            // *     example 2: $P.http_build_query({'php': 'hypertext processor', 0: 'foo', 1: 'bar', 2: 'baz', 3: 'boom', 'cow': 'milk'}, 'myvar_');
            // *     returns 2: 'php=hypertext+processor&myvar_0=foo&myvar_1=bar&myvar_2=baz&myvar_3=boom&cow=milk'
        
            var key, use_val, use_key, i = 0, j=0, tmp_arr = [];
        
            if (!arg_separator) {
                arg_separator = '&';
            }
        
            for (key in formdata) {
                use_val = this.urlencode(formdata[key].toString());
                use_key = this.urlencode(key);
        
                if (numeric_prefix && !isNaN(key)) {
                    use_key = numeric_prefix + j;
                    j++;
                }
                tmp_arr[i++] = use_key + '=' + use_val;
            }
        
            return tmp_arr.join(arg_separator);
        },// }}}
        
        // {{{ urldecode
        urldecode: function( str ) {
            // Decodes URL-encoded string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_urldecode/
            // +       version: 809.1713
            // +   original by: Philip Peterson
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: AJ
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // %          note: info on what encoding s: function to use from: http://xkr.us/articles/javascript/encode-compare/
            // *     example 1: $P.urldecode('Kevin+van+Zonneveld%21');
            // *     returns 1: 'Kevin van Zonneveld!'
            // *     example 2: $P.urldecode('http%3A%2F%2Fkevin.vanzonneveld.net%2F');
            // *     returns 2: 'http://kevin.vanzonneveld.net/'
            // *     example 3: $P.urldecode('http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a');
            // *     returns 3: 'http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a'
            
            var histogram = {}, histogram_r = {}, code = 0, str_tmp = [];
            var ret = str.toString();
            
            var replacer = function(search, replace, str) {
                var tmp_arr = [];
                tmp_arr = str.split(search);
                return tmp_arr.join(replace);
            };
            
            // The histogram is identical to the one in urlencode.
            histogram['!']   = '%21';
            histogram['%20'] = '+';
            
            for (replace in histogram) {
                search = histogram[replace]; // Switch order when decoding
                ret = replacer(search, replace, ret) // Custom replace. No regexing   
            }
            
            // End with decodeURIComponent, which most resembles PHP's encoding s: function
            ret = decodeURIComponent(ret);
        
            return ret;
        },// }}}
        
        // {{{ urlencode
        urlencode: function( str ) {
            // URL-encodes string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_urlencode/
            // +       version: 809.1713
            // +   original by: Philip Peterson
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: AJ
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // %          note: info on what encoding s: function to use from: http://xkr.us/articles/javascript/encode-compare/
            // *     example 1: $P.urlencode('Kevin van Zonneveld!');
            // *     returns 1: 'Kevin+van+Zonneveld%21'
            // *     example 2: $P.urlencode('http://kevin.vanzonneveld.net/');
            // *     returns 2: 'http%3A%2F%2Fkevin.vanzonneveld.net%2F'
            // *     example 3: $P.urlencode('http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a');
            // *     returns 3: 'http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a'
                                             
            var histogram = {}, histogram_r = {}, code = 0, tmp_arr = [];
            var ret = str.toString();
            
            var replacer = function(search, replace, str) {
                var tmp_arr = [];
                tmp_arr = str.split(search);
                return tmp_arr.join(replace);
            };
            
            // The histogram is identical to the one in urldecode.
            histogram['!']   = '%21';
            histogram['%20'] = '+';
            
            // Begin with encodeURIComponent, which most resembles PHP's encoding s: function
            ret = encodeURIComponent(ret);
            
            for (search in histogram) {
                replace = histogram[search];
                ret = replacer(search, replace, ret) // Custom replace. No regexing
            }
            
            // Uppercase for full PHP compatibility
            return ret.replace(/(\%([a-z0-9]{2}))/g, function(full, m1, m2) {
                return "%"+m2.toUpperCase();
            });
            
            return ret;
        },// }}}
        
        // {{{ empty
        empty: function( mixed_var ) {
            // Determine whether a variable is empty
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_empty/
            // +       version: 811.1314
            // +   original by: Philippe Baumann
            // +      input by: Onno Marsman
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: LH
            // +   improved by: Onno Marsman
            // +   improved by: Francesco
            // *     example 1: $P.empty(null);
            // *     returns 1: true
            // *     example 2: $P.empty(undefined);
            // *     returns 2: true
            // *     example 3: $P.empty([]);
            // *     returns 3: true
            // *     example 4: $P.empty({});
            // *     returns 4: true
            
            var key;
            
            if (mixed_var === ""
                || mixed_var === 0
                || mixed_var === "0"
                || mixed_var === null
                || mixed_var === false
                || mixed_var === undefined
            ){
                return true;
            }
            if (typeof mixed_var == 'object') {
                for (key in mixed_var) {
                    if (typeof mixed_var[key] !== 'function' ) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        },// }}}
        
        // {{{ floatval
        floatval: function(mixed_var) {
            // +   original by: Michael White (http://getsprink.com)
            // %        note 1: The native parseFloat() method of JavaScript returns NaN when it encounters a string before an int or float value.
            // *     example 1: $P.floatval('150.03_page-section');
            // *     returns 1: 150.03
            // *     example 2: $P.floatval('page: 3');
            // *     returns 2: 0
            // *     example 2: $P.floatval('-50 + 8');
            // *     returns 2: -50
        
            return (parseFloat(mixed_var) || 0);
        },// }}}
        
        // {{{ intval
        intval: function( mixed_var, base ) {
            // Get the integer value of a variable
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_intval/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: stensi
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.intval('Kevin van Zonneveld');
            // *     returns 1: 0
            // *     example 2: $P.intval(4.2);
            // *     returns 2: 4
            // *     example 3: $P.intval(42, 8);
            // *     returns 3: 42
            // *     example 4: $P.intval('09');
            // *     returns 4: 9
        
            var tmp;
        
            if( typeof( mixed_var ) == 'string' ){
                tmp = parseInt(mixed_var*1);
                if(isNaN(tmp) || !isFinite(tmp)){
                    return 0;
                } else{
                    return tmp.toString(base || 10);
                }
            } else if( typeof( mixed_var ) == 'number' && isFinite(mixed_var) ){
                return Math.floor(mixed_var);
            } else{
                return 0;
            }
        },// }}}
        
        // {{{ is_array
        is_array: function( mixed_var ) {
            // Finds whether a variable is an array
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_array/
            // +       version: 812.114
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Legaev Andrey
            // +   bugfixed by: Cord
            // +   bugfixed by: Manish
            // %        note 1: In php.js, javascript objects are like php associative arrays 
            // *     example 1: $P.is_array(['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: true
            // *     example 2: $P.is_array('Kevin van Zonneveld');
            // *     returns 2: false
        
            return (mixed_var instanceof Array || mixed_var instanceof Object);
        },// }}}
        
        // {{{ is_bool
        is_bool: function(mixed_var)
        {
            // Finds out whether a variable is a boolean
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_bool/
            // +       version: 810.915
            // +   original by: Onno Marsman
            // *     example 1: $P.is_bool(false);
            // *     returns 1: true
            // *     example 2: $P.is_bool(0);
            // *     returns 2: false
        
            return (typeof mixed_var == 'boolean');
        },// }}}
        
        // {{{ is_int
        is_int: function( mixed_var ) {
            // Find whether the type of a variable is integer
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_int/
            // +       version: 812.313
            // +   original by: Alex
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // %        note 1: 1.0 is simplified to 1 before it can be accessed by the is_int function, this makes
            // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
            // *     example 1: $P.is_int(186.31);
            // *     returns 1: false
            // *     example 2: $P.is_int(12);
            // *     returns 2: true
        
            var y = parseInt(mixed_var * 1);
            
            if (isNaN(y)) {
                return false;
            }
            
            return mixed_var == y && mixed_var.toString() == y.toString(); 
        },// }}}
        
        // {{{ is_null
        is_null: function( mixed_var ){
            // Finds whether a variable is NULL
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_null/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.is_null('23');
            // *     returns 1: false
            // *     example 2: $P.is_null(null);
            // *     returns 2: true
        
            return ( mixed_var === null );
        },// }}}
        
        // {{{ is_numeric
        is_numeric: function( mixed_var ) {
            // Finds whether a variable is a number or a numeric string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_numeric/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: David
            // *     example 1: $P.is_numeric(186.31);
            // *     returns 1: true
            // *     example 2: $P.is_numeric('Kevin van Zonneveld');
            // *     returns 2: false
            // *     example 3: $P.is_numeric('+186.31e2');
            // *     returns 3: true
        
            return !isNaN( mixed_var );
        },// }}}
        
        // {{{ is_object
        is_object: function( mixed_var ){
            // Finds whether a variable is an object
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_object/
            // +       version: 809.2411
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Legaev Andrey
            // +   improved by: Michael White (http://getsprink.com)
            // *     example 1: $P.is_object('23');
            // *     returns 1: false
            // *     example 2: $P.is_object({foo: 'bar'});
            // *     returns 2: true
            // *     example 3: $P.is_object(null);
            // *     returns 3: false
        
            if(mixed_var instanceof Array) {
                return false;
            } else {
                return (mixed_var !== null) && (typeof( mixed_var ) == 'object');
            }
        },// }}}
        
        // {{{ is_string
        is_string: function( mixed_var ){
            // Find whether the type of a variable is string
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_string/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.is_string('23');
            // *     returns 1: true
            // *     example 2: $P.is_string(23.5);
            // *     returns 2: false
        
            return (typeof( mixed_var ) == 'string');
        },// }}}
        
        // {{{ isset
        isset: function(  ) {
            // Determine whether a variable is set
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_isset/
            // +       version: 809.522
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: FremyCompany
            // +   improved by: Onno Marsman
            // *     example 1: $P.isset( undefined, true);
            // *     returns 1: false
            // *     example 2: $P.isset( 'Kevin van Zonneveld' );
            // *     returns 2: true
            
            var a=arguments; var l=a.length; var i=0;
            
            if (l==0) { 
                throw new Error('Empty this.isset'); 
            }
            
            while (i!=l) {
                if (typeof(a[i])=='undefined' || a[i]===null) { 
                    return false; 
                } else { 
                    i++; 
                }
            }
            return true;
        },// }}}
        
        // {{{ print_r
        print_r: function( array, return_val ) {
            // Prints human-readable information about a variable
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_print_r/
            // +       version: 809.2411
            // +   original by: Michael White (http://getsprink.com)
            // +   improved by: Ben Bryan
            // *     example 1: $P.print_r(1, true);
            // *     returns 1: 1
            
            var output = "", pad_char = " ", pad_val = 4;
        
            var formatArray = function (obj, cur_depth, pad_val, pad_char) {
                if (cur_depth > 0) {
                    cur_depth++;
                }
        
                var base_pad = repeat_char(pad_val*cur_depth, pad_char);
                var thick_pad = repeat_char(pad_val*(cur_depth+1), pad_char);
                var str = "";
        
                if (obj instanceof Array || obj instanceof Object) {
                    str += "Array\n" + base_pad + "(\n";
                    for (var key in obj) {
                        if (obj[key] instanceof Array) {
                            str += thick_pad + "["+key+"] => "+formatArray(obj[key], cur_depth+1, pad_val, pad_char);
                        } else {
                            str += thick_pad + "["+key+"] => " + obj[key] + "\n";
                        }
                    }
                    str += base_pad + ")\n";
                } else if(obj == null || obj == undefined) {
                    str = '';
                } else {
                    str = obj.toString();
                }
        
                return str;
            };
        
            var repeat_char = function (len, pad_char) {
                var str = "";
                for(var i=0; i < len; i++) { 
                    str += pad_char; 
                };
                return str;
            };
            output = formatArray(array, 0, pad_val, pad_char);
        
            if (return_val !== true) {
                document.write("<pre>" + output + "</pre>");
                return true;
            } else {
                return output;
            }
        },// }}}
        
        // {{{ serialize
        serialize: function( mixed_value ) {
            // Generates a storable representation of a value
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_serialize/
            // +       version: 812.114
            // +   original by: Arpad Ray (mailto:arpad@php.net)
            // +   improved by: Dino
            // +   bugfixed by: Andrej Pavlovic
            // %          note: We feel the main purpose of this should: function be to ease the transport of data between php & js
            // %          note: Aiming for PHP-compatibility, we have to translate objects to arrays
            // *     example 1: $P.serialize(['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: 'a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}'
            // *     example 2: $P.serialize({firstName: 'Kevin', midName: 'van', surName: 'Zonneveld'});
            // *     returns 2: 'a:3:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";s:7:"surName";s:9:"Zonneveld";}'
        
            var _getType = function( inp ) {
                var type = typeof inp, match;
                var key;
                if (type == 'object' && !inp) {
                    return 'null';
                }
                if (type == "object") {
                    if (!inp.constructor) {
                        return 'object';
                    }
                    var cons = inp.constructor.toString();
                    if (match = cons.match(/(\w+)\(/)) {
                        cons = match[1].toLowerCase();
                    }
                    var types = ["boolean", "number", "string", "array"];
                    for (key in types) {
                        if (cons == types[key]) {
                            type = types[key];
                            break;
                        }
                    }
                }
                return type;
            };
            var type = _getType(mixed_value);
            var val, ktype = '';
            
            switch (type) {
                case "function": 
                    val = ""; 
                    break;
                case "undefined":
                    val = "N";
                    break;
                case "boolean":
                    val = "b:" + (mixed_value ? "1" : "0");
                    break;
                case "number":
                    val = (Math.round(mixed_value) == mixed_value ? "i" : "d") + ":" + mixed_value;
                    break;
                case "string":
                    val = "s:" + mixed_value.length + ":\"" + mixed_value + "\"";
                    break;
                case "array":
                case "object":
                    val = "a";
                    /*
                    if (type == "object") {
                        var objname = mixed_value.constructor.toString().match(/(\w+)\(\)/);
                        if (objname == undefined) {
                            return;
                        }
                        objname[1] = this.serialize(objname[1]);
                        val = "O" + objname[1].substring(1, objname[1].length - 1);
                    }
                    */
                    var count = 0;
                    var vals = "";
                    var okey;
                    var key;
                    for (key in mixed_value) {
                        ktype = _getType(mixed_value[key]);
                        if (ktype == "function" && ktype == "object") { 
                            continue; 
                        }
                        
                        okey = (key.match(/^[0-9]+$/) ? parseInt(key) : key);
                        vals += this.serialize(okey) +
                                this.serialize(mixed_value[key]);
                        count++;
                    }
                    val += ":" + count + ":{" + vals + "}";
                    break;
            }
            if (type != "object" && type != "array") val += ";";
            return val;
        },// }}}
        
        // {{{ unserialize
        unserialize: function(data){
            // Creates a PHP value from a stored representation
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_unserialize/
            // +       version: 809.2122
            // +     original by: Arpad Ray (mailto:arpad@php.net)
            // +     improved by: Pedro Tainha (http://www.pedrotainha.com)
            // +     bugfixed by: dptr1988
            // +      revised by: d3x
            // +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // %            note: We feel the main purpose of this should: function be to ease the transport of data between php & js
            // %            note: Aiming for PHP-compatibility, we have to translate objects to arrays 
            // *       example 1: $P.unserialize('a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}');
            // *       returns 1: ['Kevin', 'van', 'Zonneveld']
            // *       example 2: $P.unserialize('a:3:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";s:7:"surName";s:9:"Zonneveld";}');
            // *       returns 2: {firstName: 'Kevin', midName: 'van', surName: 'Zonneveld'}
            
            var error = function (type, msg, filename, line){throw new window[type](msg, filename, line);};
            var read_until = function (data, offset, stopchr){
                var buf = [];
                var chr = data.slice(offset, offset + 1);
                var i = 2;
                while(chr != stopchr){
                    if((i+offset) > data.length){
                        error('Error', 'Invalid');
                    }
                    buf.push(chr);
                    chr = data.slice(offset + (i - 1),offset + i);
                    i += 1;
                }
                return [buf.length, buf.join('')];
            };
            var read_chrs = function (data, offset, length){
                buf = [];
                for(var i = 0;i < length;i++){
                    var chr = data.slice(offset + (i - 1),offset + i);
                    buf.push(chr);
                }
                return [buf.length, buf.join('')];
            };
            var _unserialize = function (data, offset){
                if(!offset) offset = 0;
                var buf = [];
                var dtype = (data.slice(offset, offset + 1)).toLowerCase();
                
                var dataoffset = offset + 2;
                var typeconvert = new Function('x', 'return x');
                var chrs = 0;
                var datalength = 0;
                
                switch(dtype){
                    case "i":
                        typeconvert = new Function('x', 'return parseInt(x)');
                        var readData = read_until(data, dataoffset, ';');
                        var chrs = readData[0];
                        var readdata = readData[1];
                        dataoffset += chrs + 1;
                    break;
                    case "b":
                        typeconvert = new Function('x', 'return (parseInt(x) == 1)');
                        var readData = read_until(data, dataoffset, ';');
                        var chrs = readData[0];
                        var readdata = readData[1];
                        dataoffset += chrs + 1;
                    break;
                    case "d":
                        typeconvert = new Function('x', 'return parseFloat(x)');
                        var readData = read_until(data, dataoffset, ';');
                        var chrs = readData[0];
                        var readdata = readData[1];
                        dataoffset += chrs + 1;
                    break;
                    case "n":
                        readdata = null;
                    break;
                    case "s":
                        var ccount = read_until(data, dataoffset, ':');
                        var chrs = ccount[0];
                        var stringlength = ccount[1];
                        dataoffset += chrs + 2;
                        
                        var readData = read_chrs(data, dataoffset+1, parseInt(stringlength));
                        var chrs = readData[0];
                        var readdata = readData[1];
                        dataoffset += chrs + 2;
                        if(chrs != parseInt(stringlength) && chrs != readdata.length){
                            error('SyntaxError', 'String length mismatch');
                        }
                    break;
                    case "a":
                        var readdata = {};
                        
                        var keyandchrs = read_until(data, dataoffset, ':');
                        var chrs = keyandchrs[0];
                        var keys = keyandchrs[1];
                        dataoffset += chrs + 2;
                        
                        for(var i = 0;i < parseInt(keys);i++){
                            var kprops = _unserialize(data, dataoffset);
                            var kchrs = kprops[1];
                            var key = kprops[2];
                            dataoffset += kchrs;
                            
                            var vprops = _unserialize(data, dataoffset);
                            var vchrs = vprops[1];
                            var value = vprops[2];
                            dataoffset += vchrs;
                            
                            readdata[key] = value;
                        }
                        
                        dataoffset += 1;
                    break;
                    default:
                        error('SyntaxError', 'Unknown / Unhandled data type(s): ' + dtype);
                    break;
                }
                return [dtype, dataoffset - offset, typeconvert(readdata)];
            };
            return _unserialize(data, 0)[2];
        },// }}}
        
        // {{{ var_export
        var_export: function(mixed_expression, bool_return) {
            // Outputs or returns a parsable string representation of a variable
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_var_export/
            // +       version: 809.522
            // +   original by: Philip Peterson
            // +   improved by: johnrembo
            // -    depends on: echo
            // *     example 1: $P.var_export(null);
            // *     returns 1: null
            // *     example 2: $P.var_export({0: 'Kevin', 1: 'van', 2: 'Zonneveld'}, true);
            // *     returns 2: "array (\n  0 => 'Kevin',\n  1 => 'van',\n  2 => 'Zonneveld'\n)"
            // *     example 3: $P.data = 'Kevin';
            // *     example 3: $P.var_export(data, true);
            // *     returns 3: "'Kevin'"
        
            var retstr = "";
            var iret = "";
            var cnt = 0;
            var x = [];
            
            var __getType = function( inp ) {
                var type = typeof inp, match;
                if (type == 'object' && !inp) {
                    return 'null';
                }
                if (type == "object") {
                    if (!inp.constructor) {
                        return 'object';
                    }
                    var cons = inp.constructor.toString();
                    if (match = cons.match(/(\w+)\(/)) {
                        cons = match[1].toLowerCase();
                    }
                    var types = ["boolean", "number", "string", "array"];
                    for (key in types) {
                        if (cons == types[key]) {
                            type = types[key];
                            break;
                        }
                    }
                }
                return type;
            };
            var type = __getType(mixed_expression);
            
            if( type === null) {
                retstr = "NULL";
            } else if(type == 'array' || type == 'object') {
                for(i in mixed_expression) {
                    x[cnt++] = this.var_export(i,true)+" => "+this.var_export(mixed_expression[i], true);
                }
                iret = x.join(',\n  ');
                retstr = "array (\n  "+iret+"\n)";
            } else {
                retstr = (!isNaN( mixed_expression )) ? mixed_expression : "'" + mixed_expression.replace('/(["\'\])/g', "\\$1").replace('/\0/g', "\\0") + "'";
            }
            
            if(bool_return != true) {
                this.echo(retstr);
                return null;
            } else {
                return retstr;
            }
        },// }}}
        
        // {{{ utf8_decode
        utf8_decode: function ( str_data ) {
            // Converts a string with ISO-8859-1 characters encoded with UTF-8   to single-byte
            // ISO-8859-1
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_utf8_decode/
            // +       version: 810.621
            // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
            // +      input by: Aman Gupta
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Norman "zEh" Fuchs
            // +   bugfixed by: hitwork
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.utf8_decode('Kevin van Zonneveld');
            // *     returns 1: 'Kevin van Zonneveld'
        
            var tmp_arr = [], i = ac = c1 = c2 = c3 = 0;
        
            str_data += '';
        
            while ( i < str_data.length ) {
                c1 = str_data.charCodeAt(i);
                if (c1 < 128) {
                    tmp_arr[ac++] = String.fromCharCode(c1);
                    i++;
                } else if ((c1 > 191) && (c1 < 224)) {
                    c2 = str_data.charCodeAt(i+1);
                    tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
                    i += 2;
                } else {
                    c2 = str_data.charCodeAt(i+1);
                    c3 = str_data.charCodeAt(i+2);
                    tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }
        
            return tmp_arr.join('');
        },// }}}
        
        // {{{ utf8_encode
        utf8_encode: function ( string ) {
            // Encodes an ISO-8859-1 string to UTF-8
            // 
            // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_utf8_encode/
            // +       version: 811.1414
            // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: sowberry
            // +    tweaked by: Jack
            // +   bugfixed by: Onno Marsman
            // +   improved by: Yves Sucaet
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.utf8_encode('Kevin van Zonneveld');
            // *     returns 1: 'Kevin van Zonneveld'
        
            string = (string+'').replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        
            var utftext = "";
            var start, end;
            var stringl = 0;
        
            start = end = 0;
            stringl = string.length;
            for (var n = 0; n < stringl; n++) {
                var c1 = string.charCodeAt(n);
                var enc = null;
        
                if (c1 < 128) {
                    end++;
                } else if((c1 > 127) && (c1 < 2048)) {
                    enc = String.fromCharCode((c1 >> 6) | 192) + String.fromCharCode((c1 & 63) | 128);
                } else {
                    enc = String.fromCharCode((c1 >> 12) | 224) + String.fromCharCode(((c1 >> 6) & 63) | 128) + String.fromCharCode((c1 & 63) | 128);
                }
                if (enc != null) {
                    if (end > start) {
                        utftext += string.substring(start, end);
                    }
                    utftext += enc;
                    start = end = n+1;
                }
            }
        
            if (end > start) {
                utftext += string.substring(start, string.length);
            }
        
            return utftext;
        }// }}}
    }; // End PHP_JS prototype 
    
    window.$P = PHP_JS();
})();
