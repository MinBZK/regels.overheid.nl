---
tags:
  - law analysis
  - regelspraak
  - legal analysis scheme
hide:
  - tags
---
# Law analysis

> This is a summary of the book Wetsanalyse, Voor een werkbare uitvoering van wetgeving met ICT, by the author(s): Anouschka Ausems, John Bulles and Mariette Lokin.
>
> [This book](https://www.boomdenhaag.nl/webshop/wetsanalyse) is published by Boom publishers The Hague.

Legislation is an important instrument for achieving social goals. These goals can only be achieved, however, if legislation is implemented in an effective, legitimate and explainable manner. When IT systems are used for the execution of legal rules, this poses challenges on government agencies. They have extensive IT ‘landscapes’ to handle the ever-increasing number of decisions they make regarding citizens and businesses, and they have to deal with multiple changes in legislation annually and they have to account for the correctness of automated decisions, based on these regulations.

![Book Law Analysis](../assets/images/boekwetsanalyse.png)

Facing these challenges requires an approach for a structured analysis and interpretation of legislation in which every choice made is carefully documented and traceable to its legal source. This ensures that these choices are clear and that decisions based on these choices can be explained and accounted for. Another advantage of such an approach is that it is easier to determine which adjustments are required in IT systems when the legislation (the legal source) changes. This makes government agencies more agile in the implementation of legislation.

_Law Analysis_ offers this approach. ‘Law’ in this context not only comprises statutory law and delegated regulations, but also covers associated policies that fill in discretionary powers in legislation. These documents are all relevant for a correct implementation of legislation. We indicate them as ‘implementation policy’.

The book consists of two parts, covering both the description and the application of the approach. The first part deals with the theory of Law analysis. In order to outline the context, chapter 2 discusses characteristics of legislation that often make implementation laborious. Chapter 3 describes the steps of Law Analysis:

1. **Determining the working area** in this step the scope of the legislation and associated policies to which Law analysis is applied are determined. To be able to do so, a main question is specified, regarding the application of legislation or the execution of a legal task. 
2. **Visualizing the structure of legislation** in this step the structure of the legal rules is made explicit with the help of a special legal analysis scheme, which is set out on the next page. 
3. **Defining the meaning of legislation** this step deals with defining unique concepts for terms or wording in the legislation and determining their associated properties. Furthermore, concrete examples are made, which help to clarify and sharpen the meaning of the concepts. 
4. **Validating the results** the results the previous steps are tested with the help of the concrete examples and legal scenarios.
5. **Signaling missing implementation policy** if interpretations and implementation aspects emerge that are not yet laid down in implementation policy, they are presented to the responsible unit in the organization as to fill in the gap. This is essential to guarantee the traceability of any decision or calculation to its legal source and therewith their legality. 
6. **Drawing up a knowledge model** in this final step the meaning of the legislation and implementation policy, recorded through the analysis, are laid down in a formal model. This makes the knowledge derived from the legal sources available for a traceable, explainable and lawful implementation and execution.

Chapter 4 describes the _legal analysis scheme_, in which various legal elements in legislation and the relations between them are expressed. The scheme is used to classify terms and formulations in legislation. The classification supports making explicit the unambiguous meaning of those terms and formulations.

Chapter 5 examines the multidisciplinary collaboration between lawyers, information analysts and ICT developers that is essential for an optimal result of Law analysis. With the aid of the concrete examples and legal scenarios, they discuss and validate the results of the analysis and the interpretation of the legislation. This is of great importance for the quality of the analysis and thus for the correctness of the ultimate implementation and execution of the legislation. It also helps to visualize unintended effects of legislation. Chapter 5 contains some recommendations for successful application and implementation of Law Analysis.

The second part of the book consists of two large case studies showing the practical application of Law Analysis. Chapter 6 elaborates on the income-related contribution in the Health Insurance Act (Zorgverzekeringswet). This contribution is levied by the Dutch tax administration. The analysis of the Health Insurance Act shows what it takes to ‘translate’ legislation with many calculations into exact and accountable specifications for an IT-system that supports automated execution. Analysis of the bill on the Modernization of electronic administrative communication (amendment of the Dutch General administrative law Act) has been chosen for Chapter 7. This bill ensures that the rules for digital communication between citizens and government are adapted to current technological developments. The analysis of this bill illustrates what is needed to translate process-oriented legal rules into specifications for service delivery processes. The case studies show that Law Analysis can be applied to both general and domain-specific legislation and to enacted legislation as well as draft legislation.

## Invitation to contribute
The aim of the book is to make the Law Analysis approach widely known to those involved in the implementation or execution of legislation, be it for work or study. Although the emphasis is on digital implementation of legislation in government agencies, it can also be of value in legal and information science education at universities and postgraduate courses. The aim is to build a bridge between the language of lawyers and of IT-developers.
The book describes the approach and application of Law Analysis as of early 2021. However, Law Analysis will continue to evolve under the influence of developments in legislation and in the application of law and technology. Readers are invited explicitly to share experiences and ideas they encounter in applying Law Analysis, in order to contribute to the further development of Law Analysis jointly. Thus we proceed as we do in the concrete application of Law Analysis: multidisciplinary and step by step.

## The legal analysis scheme
This section shows a diagram of the analysis scheme, used in Law Analysis to classify various formula’s in legislation. We explained the classes in the scheme on the next page. The scheme was developed on the basis of Dutch law; it might need some alteration or extension to make it applicable to legislation from other jurisdictions.

![Legal analysis scheme](../assets//images/legalanalysysscheme.png)
###Explication of the classes in the analysis scheme

1. **Legal subject** Bearer of rights and duties, natural person or legal entity. Party to a legal relationship or a legal fact.
2. **Legal object** Object of a legal relationship or a legal fact with a physical or non-physical appearance.
3. **Legal relationship** Legal relation between two legal subjects of which the one party holds a right and the other holds the duty.  
4. **Legal fact** Act, event or time lapse that creates a change in a legal state. A legal fact invokes the creation, change or ending of a legal relationship. 
5. **Condition** Condition to a legal subject, legal object, legal relationship, legal fact or derivation rule. Determines the requirements to be met. 
6. **Derivation rule** Rule that creates new facts or values by arranging or comparing existing facts or values.  
7. **Variable** Description of a value, differing per legal subject, legal object, legal relationship or legal fact.  
8. **Variable-value** Concrete value of a certain variable.
9. **Parameter** Description of a value that is equal for all legal subjects, legal objects, legal relationships and legal facts in a (definite or an indefinite) period of time. 
10. **Parameter-value** Concrete value of a certain parameter in a given period of time. 
11. **Operator** Formula indicating an arithmetic operation, a compound condition, an equality or an equation. 
12. **Time indicator** Indication of a point of period of time. 
13. **Place indicator** Indication of a place or area.
14. **Delegation power** Power to set (further) rules in a lower regulation (based on an act or decree). 
15. **Delegation elaboration** Delegated regulation in which (further) rules are set. 
16. **Source definition** Definition set in legislation.