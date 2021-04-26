# Embedding in Plunker

You can now embed plunks easily once you have saved them.
Plunker will provide you with the code needed to embed a plunk in the share
menu of the editor.  You can also share the embed url as a means to show off
a preview of your code.

## Example embed code

```html
<iframe style="border: 1px solid #999; width: 100%; height: 300px"
        src="http://embed.plnkr.co/AK732k?t=readme" frameborder="0"
        allowfullscreen="allowfullscreen">
</iframe>
```

## Customizing your embed

You can add query parameters to the embed url to affect the starting state of
the embedded view.  The parameters are as follows:

### Tab (`t`)

Select the starting view of the embedded plunk which can be any of the following:

* `run` *(default)*: Show a preview of the plunk
* `code`: Show the code behind the plunk
* `readme`: Show the markdown-compiled version of the `README.md` file if
  and only if that file exists

### File (`f`)

Select the initial file to be displayed in the *code* view.  The value of this
parameter should be one of the files actually contained in the plunk.