# Steps followed to create the cpsv file

1. Download [csv](./zorgtoeslag.csv) from [algoritmes.overheid.nl](https://algoritmes.overheid.nl/nl/algoritme/berekenen-zorgtoeslag-dienst-toeslagen/39548375) concerning Zorgtoeslag
2. Convert csv --> [xml](./zorgtoeslag.xml)
3. Map the metadata into appropriate DCAT terms
4. Adapt [ttl]](./zorgtoeslag-cpsv.ttl) to Core Publice Service Vocabulary (CPSV)
5. Extend and apply CPSV to describe **algorithms, business rules**, and the **data models** needed to award social benefits
6. CPSV-AP 3.2.0 alignment
7. Update ttl with Multiple Datasets
8. Add  1. data model of the business rules, 2. parameters used, and 3. groups of business rules
9. Add DSL (like Rulespeak)
10. Adjust [ttl](./zorgtoeslag-cpsv-reference.ttl) for consistency and clarity

## Key Notes:
- **Dataset IRI**: The `<https://www.belastingdienst.nl/...>` acts as the dataset's URI. Can be adjusted as needed.
- **Properties Used**: The conversion maps XML elements to DCAT properties such as `dct:title`, `dct:description`, `dct:issued`, `dcat:distribution`, and more.
- **Proportionality, risks, methods**: Textual descriptions map to related DCAT/DCT fields like `dct:proportionality`, `dct:risks`, and `dct:methodology`.
- **Human intervention**: Captured under `dct:humanIntervention`.

This structure fits the core DCAT elements and reflects the content from your XML.

## The difference between IRI and URI
The terms **IRI** (Internationalized Resource Identifier) and **URI** (Uniform Resource Identifier) are closely related, but they have some differences in scope and character encoding, which affects their usage in describing datasets in DCAT or any other RDF-based vocabulary.

### 1. URI (Uniform Resource Identifier):
- A **URI** is a string of characters used to uniquely identify a resource on the web.
- It typically uses a restricted character set based on ASCII characters.
- Common forms of URIs include **URLs** (Uniform Resource Locators), which provide a specific web address for resources (e.g., `http://example.com/resource`), and **URNs** (Uniform Resource Names), which identify resources by name within a specific namespace (e.g., `urn:isbn:0451450523`).
- A **URL** is a type of **URI**, but not all URIs are URLs (a URI could be a URN as well).

### 2. IRI (Internationalized Resource Identifier):
- An **IRI** is an extension of the URI that allows a broader range of characters, including those from non-ASCII character sets (such as characters from Unicode, allowing international scripts like Chinese, Arabic, Cyrillic, etc.).
- An IRI can contain characters from any language, making it more suitable for global applications and datasets that might use non-ASCII characters in their identifiers.
- **IRIs** can be used wherever **URIs** are used but provide more flexibility for internationalization.

**Example of an IRI:** `http://example.com/资源/数据集`

### In the context of Datasets:
- **Dataset IRI**: This is the identifier for the dataset that can use international characters, making it more versatile for non-English or multi-language datasets.
- **Dataset URI**: This refers to the identifier for the dataset using only the ASCII character set, such as typical web addresses (URLs).

**In practice**, an IRI can be converted into a URI by percent-encoding any non-ASCII characters. So while all IRIs are a generalization of URIs, not all URIs are full IRIs, particularly if they don't use the extended character set.

### Example in DCAT context:
- **Dataset IRI**: `https://voorbeeld.nl/gegevens/база_данных`
- **Dataset URI (percent-encoded)**: `https://voorbeeld.nl/gegevens/%D0%B1%D0%B0%D0%B7%D0%B0_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85`

In general, use **IRI** if you're working in an internationalized context, or if you expect to handle non-ASCII characters in the identifiers.

## Core Public Service Vocabulary (CPSV)
The **Core Public Service Vocabulary (CPSV)** is designed to describe public services, focusing on aspects such as the service's legal basis, inputs, outputs, and channels.

The **CPSV-AP** (Application Profile for public services) vocabulary introduces key classes and properties that are focused on public services rather than datasets.

### Key Changes and Mapping to CPSV:
- cpsv: The root element of the dataset is now represented as a **PublicService**, which is the central concept of CPSV, used to describe public services offered to citizens or businesses.
- cpsv: Describes the organization responsible for delivering the service, which in this case is **Dienst Toeslagen**.
- cpsv: Links to the legal bases (laws or regulations) under which the service operates, like the **Awir** and **Wet Zorgtoeslag**.
- cpsv: This property represents the output of the service, which in this case is the **decision about the care allowance (zorgtoeslag)**.
- cpsv: Describes the inputs required by the public service, such as **personal data, income, and insurance information**.
- cpsv: Defines the channels through which the service is delivered, which in this case is the **online algorithm-based application**.
- cpsv: Indicates the procedures followed by the service, including reference to any relevant legal resources like **AVG**.
- cpsv: Describes the conditions that must be met by applicants to access the service, such as having a **health insurance policy** and meeting **income criteria**.
- cpsv : Captures the scenario where a human can intervene if the algorithm cannot process the request.

### Additional Changes:
- **Temporal Coverage**: The start date of the service is represented using the `dct:temporal` property.
- **Rights and Legal Compliance**: Descriptions about privacy, non-discrimination, and data minimization are captured using `dct:rights` and `cpsv:hasLegalResource`.

## Algorithms, business rules, and data models 
### 1. Algorithm for Awarding Social Benefits
The algorithm can be described using the **CPSV** core class `cpsv:PublicService` in combination with properties to capture the fact that the service uses an algorithm to process social benefit claims.

### 2. Business Rules Applied in the Algorithm
The **business rules** that govern how the algorithm determines eligibility, amount, and duration of the social benefit can be described using the **cpsv** class. This allows for the formalization of the rules that are applied by the algorithm.

### 3. Data Model for Determining Benefit
The **data model** or required input data can be described using the **cpsv** class to specify what data is required to determine the right to, and the amount/duration of, the benefit based on the business rules.

## Key Points on CPSV-AP 3.2.0 Alignment

- **cpsv-ap**: The public service is described as **PublicService** and uses formal properties like `cpsv-ap:hasInput`, `cpsv-ap:hasOutput`, and `cpsv-ap:hasChannel`.
- **cpsv-ap**: This property is used to describe the business rules implemented by the algorithm, adhering to **CPSV-AP** standards.
- **cpsv-ap**: Introduces the concept of a **Business Event** (the process of applying for benefits), as specified in **CPSV-AP 3.2.0**.
- **cpsv-ap**: Clearly describes eligibility conditions, as per **CPSV-AP**.
- **cpsv-ap**: Links to the legal basis of the service, as required by the **CPSV-AP** profile.
- **cpsv-ap**: Specifies whether the service is free or paid, a property required by the **CPSV-AP**.

## Update TTL with Multiple Datasets

To represent the **input data** using different **DCAT datasets** as sources, we use the `cpsv-ap:hasInput` property to connect the public service with multiple **datasets**. These datasets can then be described according to the **DCAT** (Data Catalog Vocabulary) model, either from the same catalog or different ones.

### Breakdown
1. `cpsv-ap:hasInput`:
    - The `cpsv-ap:hasInput` property of the **PublicService** now links to three different datasets: `#income_dataset`, `#family_status_dataset`, and `#employment_status_dataset`.

2. **Each Dataset**:
    - Each input dataset is described using the **DCAT vocabulary**. For example:
        - `#income_dataset`: Describes income data provided by the **Tax Authority**.- `#family_status_dataset`: Describes family and household information provided by the **Civil Registry**.
        - `#employment_status_dataset`: Describes employment status information provided by the **Employment Agency**.
3. **DCAT Properties**:
    - **dct**: Title of the dataset (e.g., "Income Data").
    - **dct**: A description of the dataset (e.g., "Dataset containing income information for individuals").
    - **dct**: The organization responsible for publishing the dataset.
    - **dcat**: URL where the dataset can be accessed.
    - **dct**: The date when the dataset was issued.
    - **dct**: Specifies how often the dataset is updated.
    - **dct**: Specifies the schema or standard to which the dataset conforms.

### Key Points:
- **Modularity**: This approach allows you to describe different types of input data from various sources or catalogs (income, family status, employment status), each as a separate dataset.
- **Data Sources**: Each dataset is linked to its respective publisher and access URL, making it clear where the data is coming from.
- **Data Standards**: Using `dct:conformsTo`, you can specify which schema or data model each dataset follows, ensuring interoperability and clarity in terms of structure.

This approach enables us  to describe multiple datasets as inputs for the public service, adhering to CPSV-AP and DCAT standards. Each input is linked to its corresponding dataset, allowing for a clear and structured description of where the data comes from and how it contributes to the public service.

## Breakdown after adding Business Rules details
1. `cpsv-ap:Rule`:
    - The business rules are described as a **cpsv-ap** connected to the public service using `cpsv-ap:implements`.
2. **Data Model for Business Rules**:
    - The data model is described using **cpsv-ap**. It specifies the required input data (income, family status, employment status), and can reference an external schema or standard (e.g., `dct:conformsTo` pointing to the data model schema).
3. **Parameters for Business Rules**:
    - The parameters (e.g., **income thresholds**, **family size**, **employment duration**) are represented as instances of **cpsv-ap**, with properties like `dct:title`, `dct:description`, and `dct:value` to describe each one.
4. **Groups of Business Rules**:
    - The business rules are divided into different **cpsv-ap** entities, each representing a different aspect of the calculation (eligibility, amount, duration). This allows flexibility in organizing the rules based on the different inputs and outputs.

This structure captures the complexity of business rules, breaking them down into their **data model**, **parameters**, and **groups** of rules, all while aligning with **CPSV-AP** standards. Each component can be further linked to datasets or external schemas, providing a clear representation of how the social benefit service is processed.

## Add DSL (Like Rulespeak)

- `dct:source`: Used to specify the **URI** where the actual rules in **Rulespeak** (or any other DSL) are stored or described. This URI might point to a formal repository or a rules engine that contains the logic.
- `rdfs:seeAlso`: Optionally used for linking to additional documentation, such as a page or document that provides further explanation of the rules in **Rulespeak** syntax or any other DSL.

### Example of Rules URIs:
- **Eligibility Rules URI**: `<https://rules.example.org/eligibility-rules>` (a URI where the rules are implemented or documented).
- **Benefit Amount Rules URI**: `<https://rules.example.org/benefit-amount-rules>`.
- **Benefit Duration Rules URI**: `<https://rules.example.org/benefit-duration-rules>`.

Each **RuleGroup** can reference its own URI for its corresponding rules. You can substitute these placeholders with the actual URIs where your business rules are defined or stored.

### Breakdown
1. **Eligibility Rules**: The rules governing eligibility, based on inputs like income and employment status. This group can link to a specific resource or API where these rules are stored.
2. **Benefit Amount Rules**: This rule group governs how the amount of benefit is calculated. The URI points to the location where these calculations are defined (using Rulespeak, for example).
3. **Benefit Duration Rules**: Rules that define the duration of the social benefit, based on criteria such as employment duration.

## Minor adjustments for consistency and clarity

- **Language Tags**: Added `@en` consistently to all literals for clarity.
- **Clarified** `cpsv-ap:RuleGroup` **Structure**: The rule groups (`Eligibility Rules`, `Benefit Amount Rules`, and `Benefit Duration Rules`) now clearly link to their DSL URI using `dct:source`, and `rdfs:seeAlso` provides further documentation.
- **General Tidying**: Made sure all properties are applied in the proper way per the CPSV-AP structure, ensuring clarity in dataset and rule relationships.

This structure should now align well with **CPSV-AP** best practices for describing public services with multiple datasets, rules, and algorithmic processing.