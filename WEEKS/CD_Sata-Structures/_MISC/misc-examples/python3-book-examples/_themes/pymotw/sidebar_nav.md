{%- if next or prev %}

##### Navigation

- [{{ prev.title }}](%7B%7B%20prev.link%7Ce%20%7D%7D "{{ _('previous chapter') }}")
- [{{ next.title }}](%7B%7B%20next.link%7Ce%20%7D%7D "{{ _('next chapter') }}")

{%- endif %}
