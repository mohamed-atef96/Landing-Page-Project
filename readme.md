

# Landing Page Project

## About project and usage

- landing page project is the first project in Front End Web Development Professional Nanodegree Program
- the project Includes number of sections and  Navigation bar
- from Navigation bar you can navigate through them
- add new sections from add section button
- go to the top of the  page by clicking totop icon


## Development

- there are four main function:-
    - createElement()
    - creatMenu()
    - addActive()
    - addSection()
1. createElement function 
    - used to create any element in html dynamically
    - take three param (tag ,attribute , text)
    - tag is the tage name we want to create
    - attributes is the attributes which element will take
    - text the text content of element
2. creatMenu function 
    - used to creat links of navigation
    - take section element as an argument to link between it and navigation link
3. addActive function 
    -used to add active state to the section and links while scolling
4. addSection function
    - used to create new section and link it to navigation

- intersectionObserver to detect section that is in viewport
- scrollIntoView to link scroll to the appropriate section