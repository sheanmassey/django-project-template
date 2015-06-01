### Django project template

Use the template to create new projects:

```shellsession
# django-admin.py startproject --template=https://github.com/sheanmassey/django-project-template/archive/master.zip new_project
# chmod +x new_project/manage.py
```

Or maybe better, script a .bashrc function:

```bash
function django-admin-startproject() {
    local _PROJECT_NAME="$1"; shift;
    local _TEMPLATE="https://github.com/sheanmassey/django-project-template/archive/master.zip";

    django-admin.py startproject --template="${_TEMPLATE}" "${_PROJECT_NAME}" --names gulpfile.js;
    
    chmod +x "${_PROJECT_NAME}/manage.py";
    
    ./${_PROJECT_NAME}/manage.py migrate
    ./${_PROJECT_NAME}/manage.py createsuperuser
}
```

There's a default app installed named `core`. It's pretty bare now, except the models that defines an AppUser. core.models.AppUser is the default user object defined in the `settings.py`.

