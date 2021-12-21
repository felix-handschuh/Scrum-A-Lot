var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Button, Container, render, TextboxMultiline, useInitialFocus, VerticalSpace } from '@create-figma-plugin/ui';
import { emit } from '@create-figma-plugin/utilities';
import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
function Plugin(props) {
    var _a = useState(props.text), text = _a[0], setText = _a[1];
    var handleUpdateButtonClick = useCallback(function () {
        emit('UPDATE_TEXT', text);
    }, [text]);
    return (h(Container, null,
        h(VerticalSpace, { space: 'large' }),
        h(TextboxMultiline, __assign({}, useInitialFocus(), { onValueInput: setText, value: text })),
        h(VerticalSpace, { space: 'large' }),
        h(Button, { fullWidth: true, onClick: handleUpdateButtonClick }, "Update Text"),
        h(VerticalSpace, { space: 'small' })));
}
export default render(Plugin);
