<img src="/icons/817743-dinosaur-avatars-situations/svg/044-worker.svg" width="40%" alt="" />

# Contributing

Help is most wanted [populating the icon thesaurus](https://github.com/glombek/umbicosaurus/issues/1). Ensure any edits conform to the [supplied JSON Schema](https://github.com/glombek/umbicosaurus/blob/main/thesaurus.schema.json).

Other contributions are welcome too, but are not a priority at this time. Guidelines will be updated with more detail once the population of the thesaurus is complete.



## Contributing to the thesauraus

The thesaurus is a list of terms you'd like to search for to find the icon. Partial matching works so use plurals here where appropriate (and also the singular if the spelling is different e.g. add `lead` and `leaves` but only `plants` not `plant`).

You have to options for contribution to the thesaurus, manually in the JSON file or using the UI editor.

### UI editor (v8)

Open the Umbraco solution found in the `umbraco` folder of the repo. A gulp task should run as soon as the solution is opened.

Run the solution and navigate to `/umbraco`.

You'll find a dashboard for editing the icon thesaurus.

Input thesaurus entries, one per line, in the `Thesaurus` box and select a category from the dropdown.

Clicking save will update the output below, while clicking `Export output` will generate the file for you to save over the exiting one in the root of the repo. Commit, push and open a PR!

If you want to skip an icon, just click the Save button and we'll show you another one.

### Manually editing the JSON file

The biggest issue with getting release 1 out for Umbicosaurus is adding a thesaurus entry for each icon.

Help is desperately wanted to input these values into [the thesaurus.json file](https://github.com/glombek/umbicosaurus/blob/main/thesaurus.json).

There's a [schema file](https://github.com/glombek/umbicosaurus/blob/main/thesaurus.schema.json) too to make editing easier in VS Code/VS 2022 (or any other editor supporting JSON Schema).

Each icon has a dictionary entry. See [this handy list by ucreate to match an icon to an icon name](https://nicbell.github.io/ucreate/icons.html).

The icon entry looks like this:

```
"thesaurus": [
      "magnifying glass",
      "shring",
      "smaller"
    ],
    "group": "action zoom",
    "related": [
      "icon-zoom-in"
    ]
```

The group is a string from the [schema file](https://github.com/glombek/umbicosaurus/blob/main/Umbicosaurus/Umbicosaurus.Demo/App_Plugins/Umbicosaurus/thesaurus.schema.json)  used for sorting the icons into sensible groups.

Related icons are optional, but this should contain names of any icons which are visually similar, i.e. ones you might select by mistake when looking for this icon. The related icons are shown when you've already got an icon selected.

**Thank you for contributing!**

<img src="/icons/817743-dinosaur-avatars-situations/svg/042-in-love.svg" width="20%" alt="" />
