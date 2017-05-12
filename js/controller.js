$(document).ready(function()
{
    // Runs the app
    function authenticate(username, password)
    {
        var result = null;
        $.ajax({
            url:'/ajax-php/service.php/login',
            dataType:'json',
            timeout:500,
            async:false,
            type:'post',
            data:
            {
                username:username,
                password:password
            },
            success:function(response)
            {
                if (response.stat.toLowerCase() != 'ok')
                {
                    alert(response.message);
                }
                else
                {
                    result = response.message;
                }
            },
            error:function(jq_xhr, status, error)
            {
                alert(error);
            }
        });
        return result;
    }

    function run()
    {
        $('input[name=username]').val('jadissa');
        $('input[name=password]').val('asdf123');

        $('form').submit(function(e)
        {
            e.preventDefault();
            var response = authenticate($('input[name=username]').val(), $('input[name=password]').val());
            if (!isEmpty(response))
            {
                alert(response);
            }
        });
    }

    run();
});
