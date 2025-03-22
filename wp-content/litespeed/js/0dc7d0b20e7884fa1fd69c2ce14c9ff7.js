jQuery(document).ready(function($) {
    function updateMiniCartCount() {
        $.ajax({
            url: customAjax.ajaxUrl,
            type: 'POST',
            data: {
                action: 'norflo_update_mini_cart_count',
                security: customAjax.nonce
            },
            success: function(response) {
                $('.mini-cart-count').text(response)
            },
            error: function(error) {
                console.log(error)
            }
        })
    }

    function updateMiniCartCountAfterUpdate() {
        $.ajax({
            url: customAjax.ajaxUrl,
            type: 'POST',
            data: {
                action: 'norflo_update_mini_cart_count_after_update',
                security: customAjax.nonce
            },
            success: function(response) {
                if (response.success) {
                    $('.mini-cart-count').replaceWith(response.data)
                }
            },
            error: function(error) {
                console.log(error)
            }
        })
    }
    updateMiniCartCount();
    $(document).on('updated_cart_totals', function() {
        updateMiniCartCountAfterUpdate()
    })
});