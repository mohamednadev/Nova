jQuery(document).ready(function($) {
    $('.watchlist-btn').on('click', function() {
        var postId = $(this).data('post-id');
        var $button = $(this);
        $.ajax({
            url: watchlist_ajax.ajax_url,
            type: 'POST',
            data: {
                action: 'movie_watchlist_action',
                post_id: postId,
                nonce: watchlist_ajax.nonce
            },
            success: function(response) {
                if (response.success) {
                    if ($button.hasClass('add-to-watchlist')) {
                        $button.removeClass('add-to-watchlist').addClass('remove-from-watchlist').text('Remove from Watchlist')
                    } else {
                        $button.removeClass('remove-from-watchlist').addClass('add-to-watchlist').text('Add to Watchlist')
                    }
                }
            }
        })
    })
});