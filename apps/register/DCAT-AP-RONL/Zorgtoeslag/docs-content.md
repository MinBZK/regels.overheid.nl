# The difference between IRI and URI
The terms **IRI** (Internationalized Resource Identifier) and **URI** (Uniform Resource Identifier) are closely related, but they have some differences in scope and character encoding, which affects their usage in describing datasets in DCAT or any other RDF-based vocabulary.

## 1. URI (Uniform Resource Identifier):
- A **URI** is a string of characters used to uniquely identify a resource on the web.
- It typically uses a restricted character set based on ASCII characters.
- Common forms of URIs include **URLs** (Uniform Resource Locators), which provide a specific web address for resources (e.g., `http://example.com/resource`), and **URNs** (Uniform Resource Names), which identify resources by name within a specific namespace (e.g., `urn:isbn:0451450523`).
- A **URL** is a type of **URI**, but not all URIs are URLs (a URI could be a URN as well).

## 2. IRI (Internationalized Resource Identifier):
- An **IRI** is an extension of the URI that allows a broader range of characters, including those from non-ASCII character sets (such as characters from Unicode, allowing international scripts like Chinese, Arabic, Cyrillic, etc.).
- An IRI can contain characters from any language, making it more suitable for global applications and datasets that might use non-ASCII characters in their identifiers.
- **IRIs** can be used wherever **URIs** are used but provide more flexibility for internationalization.

**Example of an IRI:** `http://example.com/资源/数据集`

## In the context of Datasets:
- **Dataset IRI**: This is the identifier for the dataset that can use international characters, making it more versatile for non-English or multi-language datasets.
- **Dataset URI**: This refers to the identifier for the dataset using only the ASCII character set, such as typical web addresses (URLs).

**In practice**, an IRI can be converted into a URI by percent-encoding any non-ASCII characters. So while all IRIs are a generalization of URIs, not all URIs are full IRIs, particularly if they don't use the extended character set.

## Example in DCAT context:
- **Dataset IRI**: `https://voorbeeld.nl/gegevens/база_данных`
- **Dataset URI (percent-encoded)**: `https://voorbeeld.nl/gegevens/%D0%B1%D0%B0%D0%B7%D0%B0_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85`

In general, use **IRI** if you're working in an internationalized context, or if you expect to handle non-ASCII characters in the identifiers.