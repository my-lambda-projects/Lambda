import _ from 'lodash';
import classnames from 'classnames';
import '../scss/input.scss';

class Input {
    constructor(options) {
        _.merge(this, {
            id: null,
            name: null,
            required: false,
            type: 'input',
            value: null,
            message: '',
            min: 1
        }, options);
        if (!this.label) this.label = this.name;

        var div = $('<div>', {
            id: this.id,
            class: classnames({
                materialInput: true,
                checkbox: this.type == 'boolean'
            })
        });
        var input;
        if (this.type == 'boolean') {
            $('<label>', {
                for: this.name,
                html: this.label + ':'
            }).appendTo(div);
            input = $('<input>', {
                type: 'checkbox',
                name: this.name,
                checked: this.value
            }).appendTo(div);
        }
        else {
            input = $('<input>', {
                type: 'text',
                name: this.name,
                value: this.value,
                required: this.required,
                min: this.min
            }).appendTo(div);
            $('<span>', {
                class: 'highlight'
            }).appendTo(div);
            $('<span>', {
                class: 'bar'
            }).appendTo(div);
            $('<label>', {
                for: this.name,
                html: this.label
            }).appendTo(div);
            $('<div>', {
                class: 'message',
                html: this.message
            }).appendTo(div);
        }

        input.on('change input verify', () => {
            var val;
            if (this.type == 'boolean') {
                val = input.is(':checked');
            }
            else {
                val = input.val().trim();
            }

            if (this.type == 'boolean') {
                div.trigger('changeVerified', [val, this.id]);
            }
            else if (this.verify(val)) {
                div.removeClass('error empty');
                if (this.type == 'number') val = parseFloat(val);
                if (this.value != val) {
                    this.value = val;
                    div.trigger('changeVerified', [val, this.id]);
                }
            }
            else {
                if (!val.length) {
                    div.addClass('empty');
                }
                if (input.attr('required')) {
                    div.addClass('error');
                }
            }
        });
        return div;
    }
    verify(e) {
        if (this.type == 'number') {
            return e && e.length && !isNaN(e);
        }
    }
}
export default Input;