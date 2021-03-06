module.exports = {
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "15.6.1"
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/default-props-match-prop-types": "error",
        "react/display-name": ["warn", {
            "ignoreTranspilerName": true
        }],
        "react/forbid-component-props": ["warn", {
            "forbid" : ["style"]
        }],
        "react/forbid-elements": "off",
        "react/forbid-prop-types": ["warn", {
            "forbid": [
                "any"
            ]
        }],
        "react/forbid-foreign-prop-types": "error",
        "react/no-array-index-key": "off",
        "react/no-children-prop": "off",
        "react/no-danger": "off",
        "react/no-danger-with-children": "warn",
        "react/no-deprecated": "warn",
        "react/no-did-mount-set-state": ["error", "disallow-in-func"],
        "react/no-did-update-set-state": ["error", "disallow-in-func"],
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "warn",
        "react/no-is-mounted": "error",
        "react/no-multi-comp": "error",
        "react/no-redundant-should-component-update": "error",
        "react/no-render-return-value": "warn",
        "react/no-set-state": "off",
        "react/no-string-refs": "error",
        "react/no-unescaped-entities": "warn",
        "react/no-unknown-property": "error",
        "react/no-unused-prop-types": "warn",
        "react/no-will-update-set-state": "off",
        "react/prefer-es6-class": ["warn", "always"],
        "react/prefer-stateless-function": ["warn", {
            "ignorePureComponents": true
        }],
        "react/prop-types": "warn",
        "react/require-default-props": "off",
        "react/require-optimization": "off",
        "react/require-render-return": "error",
        "react/self-closing-comp": ["error", {
            "component": true,
            "html": true
        }],
        "react/sort-comp": ["off", {
            "order": [
                "/^\w+$/",
                "render"
            ]
        }],
        "react/sort-prop-types": "off",
        "react/style-prop-object": "error",
        "react/void-dom-elements-no-children": "error",
        "react/jsx-boolean-value": ["warn", "always"],
        "react/jsx-closing-bracket-location": "warn",
        "react/jsx-closing-tag-location": "warn",
        "react/jsx-curly-spacing": ["error", "never", {
            "allowMultiline": false
        }],
        "react/jsx-equals-spacing": ["error", "never"],
        "react/jsx-filename-extension": ["error", {
            "extensions": [".js", ".jsx"]
        }],
        "react/jsx-first-prop-new-line": ["warn", "multiline"],
        "react/jsx-handler-names": ["off", {
            "eventHandlerPrefix": null,
            "eventHandlerPropPrefix": null
        }],
        "react/jsx-indent": ["warn", 4],
        "react/jsx-indent-props": ["warn", 4],
        "react/jsx-key": "warn",
        "react/jsx-max-props-per-line": ["off", {
            "maximum": 3
        }],
        "react/jsx-no-bind": ["error", {
            "ignoreRefs": true
        }],
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-literals": "off",
        "react/jsx-no-target-blank": "warn",
        "react/jsx-no-undef": "error",
        "react/jsx-pascal-case": "warn",
        "react/jsx-tag-spacing": ["error", {
            "closingSlash": "never",
            "beforeSelfClosing": "always",
            "afterOpening": "never"
        }],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "warn",
        "react/jsx-wrap-multilines": "warn"
    }
};
