$(function () {
    function _getUrl(_url) {
        try {
            return new URL(_url);
        }
        catch (e) {
            return '';
        }
    }

    function _getCookie(_cname) {
        let _name = _cname + '=';
        let _ca = document.cookie.split(';');

        for (let i = 0; i < _ca.length; i++) {
            let _c = _ca[i];

            while (_c.charAt(0) == ' ') {
                _c = _c.substring(1);
            }

            if (_c.indexOf(_name) == 0) {
                return _c.substring(_name.length, _c.length);
            }
        }
        return '';
    }

    function _setCookie(_cname, _cvalue) {
        const _d = new Date();
        _d.setTime(_d.getTime() + (90 * 24 * 60 * 60 * 1000));

        let _expires = 'expires=' + _d.toUTCString();
        document.cookie = _cname + '=' + _cvalue + ';' + _expires + ';secure;path=/';
    }

    function _getDate() {
        const _d = new Date();
        return _refineDay(_d.getDay()) + ', ' + _refineDate(_refineMonth(_d.getMonth()) + ' ' + _d.getDate()) + ', ' + _refineDate(_d.getFullYear()) + ' - ' + _refineTime(_refineDate(_d.getHours()), _refineDate(_d.getMinutes()), _refineDate(_d.getSeconds()));
    }

    function _refineDate(v) {
        return v.toString().length < 2 ? '0' + v : v;
    }

    function _refineTime(h, m, s) {
        var _h = h >= 12 ? h - 12 : h;
        _h = _h.toString().length < 2 ? '0' + _h : _h;
        var _m = m.toString().length < 2 ? '0' + m : m;
        var _s = s.toString().length < 2 ? '0' + s : s;
        var _a = h >= 12 ? 'pm' : 'am';

        return _h + ':' + _m + ':' + _s + ' ' + _a;
    }

    function _refineDay(v) {
        const _days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return _days[v];
    }

    function _refineMonth(v) {
        const _months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return _months[v];
    }

    console.log('_getDate', _getDate());

    var _current_landingpage_url = window.top.document.location.href;
    var _refine_current_landingpage_url = _getUrl(_current_landingpage_url);

    console.log('_refine_current_landingpage_url', _refine_current_landingpage_url);

    var _current_referrer = window.top.document.referrer;
    var _refine_current_referrer = _getUrl(_current_referrer);

    console.log('_refine_current_referrer', _refine_current_referrer);

    if (_refine_current_referrer != '' && _refine_current_landingpage_url != '' && _refine_current_referrer.host != _refine_current_landingpage_url.host) {
        _setCookie('_landingpageurl', _current_landingpage_url);
        _setCookie('_landingpagedatetime', _getDate());
        _setCookie('_referralurl', _current_referrer);
    }

    var _cookie_brandid = _getCookie('_brand_id');
    var _cookie_landingpageurl = _getCookie('_landingpageurl');
    var _cookie_landingpagedatetime = _getCookie('_landingpagedatetime');
    var _cookie_referralurl = _getCookie('_referralurl');
    var _cookie_returning = _getCookie('_returning');
    var _cookie_returningdatetime = _getCookie('_returningdatetime');
    var _cookie_lastvisit = _getCookie('_lastvisit');
    var _cookie_chatstatus = _getCookie('_chatstatus');
    var _cookie_agentstatus = _getCookie('_agentstatus');

    if (_cookie_brandid != '' && $('form').find('input[name="brand_id"]').length) {
        $('form').find('input[name="brand_id"]').val(_cookie_brandid);
    }

    if (_cookie_landingpageurl != '' && $('form').find('input[name="landingpageurl"]').length) {
        $('form').find('input[name="landingpageurl"]').val(_cookie_landingpageurl);
    }

    if (_cookie_landingpagedatetime != '' && $('form').find('input[name="landingpagedatetime"]').length) {
        $('form').find('input[name="landingpagedatetime"]').val(_cookie_landingpagedatetime);
    }

    if (_cookie_referralurl != '' && $('form').find('input[name="referralurl"]').length) {
        $('form').find('input[name="referralurl"]').val(_cookie_referralurl);
    }

    if (_cookie_returning != '' && $('form').find('input[name="returning"]').length) {
        $('form').find('input[name="returning"]').val(_cookie_returning);

        if (_cookie_returningdatetime != '' && $('form').find('input[name="returningdatetime"]').length) {
            $('form').find('input[name="returningdatetime"]').val(_cookie_returningdatetime);
        }
    }

    if (_cookie_lastvisit != '' && $('form').find('input[name="lastvisit"]').length) {
        $('form').find('input[name="lastvisit"]').val(_cookie_lastvisit);
    }

    if (_cookie_chatstatus != '' && $('form').find('input[name="chatstatus"]').length) {
        $('form').find('input[name="chatstatus"]').val(_cookie_chatstatus);
    }

    if (_cookie_agentstatus != '' && $('form').find('input[name="agentstatus"]').length) {
        $('form').find('input[name="agentstatus"]').val(_cookie_agentstatus);
    }

    $('body').append('\
        <style>@keyframes rotation{from{transform: rotate(0deg);}to{transform:rotate(359deg);}}</style>\
        <div id="mail-loader" style="position: fixed; top: 0; right: 0; bottom: 0; left: 0; background: #fff; display: none; align-items: center; justify-content: center; z-index: 2000000001;">\
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENkI5MjhBOUUyQTMxMUVDOUVDQ0E5NkRDNEUxNTcxNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENkI5MjhBQUUyQTMxMUVDOUVDQ0E5NkRDNEUxNTcxNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2QjkyOEE3RTJBMzExRUM5RUNDQTk2REM0RTE1NzE1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ2QjkyOEE4RTJBMzExRUM5RUNDQTk2REM0RTE1NzE1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+fEmDJAAAA8VJREFUeNrsWXtojlEYP9u3ac1lfCTXWLYyya1FTbnVaoU/lJjSYraVNHP58rmXRJiUjAx/oERpQi7/mNGy+WNIuaWh1r6k0ITY2D7P086bx+m855z37Tsv6nvqV+/7nud5znOuz+VlzB5lA54CngNy2X9IUUCcY5utTlJ9yAwF9DPg6ybPPwx1h20PYDGgDfDGoDOvA7jGde+1uS3qyLao0/BuILzrNbxLCe9nmwOYSjpCFCh4NxK+dQq+PoAvhHer7cNZQzp7oeCLEL4qBV8t4WsN4nbJAHSSTstc+DYRnrUuPOM9rGjCbqHvgNXk/QggRSMTd/l+QThfTUHe861k5g5L2reQ9krNwUUMCNpRFQgGjBPa95G2qNCWCfhG2iOJMgr36j0PCi8RIxqFrTSbf0d/ME2QO0XkXhr2hSvWADjotvX7CzP6CFCkUTpMkBHPQg5gjETuCZGZqekjH3BT6GeSjDEdcF1gRFwG5Ck6WMLlFnlY6Sl89SKayTkhsQdXbIhKeQUgJhHEpcsK4GyFANu5R6b945nZCUgzUdIXUC0ZxDtAuUXji4XbzcFpwGg/CnOF+MfBeQvGyybsNmB6IpQvBDywHHA1E/2YBC23scQYYV704/INM7izfJ8nKUlBkeM5i3hiEVfw9fBo8aNlmzDfnsPDBZU9mKbewpd6yfXlhg+A4RaNHwho92BPM/PA7GCCxQGM8moPuuV5gFLNFmLEsTyzOIB2fv8v0CRJzhY6l7wFkhQgYb5wANACKLGgHysUV3l+nZlo5StYbzmR3gCJpiaiOyZUPnzTDH7ziNdXjYUBRCX93AfM9aNssFAxc4BX6HyL27QQ8FDSL9aPxpoqqeQelyr4ytQ1y/QEDwSLwe8FGzp5qB1SCV6RjB5j9BEKmUOAt4DNHpP6Rq7bjQaxP+uwNNkJq7wtjTNmGZwR1cHOcomdaPWjVNMHVsRvmIYzuL/xR0OV4Uw+JkqPS/Jp3AZdPFwRt6kj18HMarTLAHcA+5m+FmtEJcSILsndvYa0H5XIvyLt1X/DsX0iBlRI2stIu+y3kVhbDfsxItWn8XvY72pyG6+gidRDnrtdHNdd8n4yqJkX66FujmYV4dmtqERQXZODWAG6n3EGGzTpKlOEHhienCHvtbZnv1CYsRwFLz0DuzRpJNVZbHMFVpLnY0z9Uy7F5TyI1CE4wR02VyCfe8IWnoKqqJzMqkm1Df8Z/GS9PweNKc3jANDwPB+6Qwb8EwEjeSht/Ro1IbpCGYYyMfYPUTYPv1/zeMYK/RJgAMZpelw+S52oAAAAAElFTkSuQmCC" style="animation: rotation 8s infinite linear;">\
        </div>\
    ');

    $(document).on('submit', 'form[action="/mail"], form[action="/mail-new"], form[action="/mail.php"], form[action="/mail-new.php"], form[action="mail"], form[action="mail-new"], form[action="mail.php"], form[action="mail-new.php"]', function (e) {
        $('div#mail-loader').css('display', 'flex');
        return true;
    });
});