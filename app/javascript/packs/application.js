// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails, { $ } from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import '@doabit/semantic-ui-sass'

export function scroll_bottom() {
    if (jQuery('#messages').length > 0) {
        jQuery('#messages').scrollTop(jQuery('#messages')[0].scrollHeight)
    }
}
function submit_message() {
    jQuery('#message_body').on('keydown', function (e) {
        if (e.keyCode == 13) {
            jQuery('button').click();
            e.target.value = "";
        };
    });
};

jQuery(document).on('turbolinks:load', function () {
    jQuery('.ui.dropdown').dropdown();
    jQuery('.message .close').on('click', function () {
        jQuery(this).closest('.message').transition('fade');
    });
    submit_message();
    scroll_bottom();
});
