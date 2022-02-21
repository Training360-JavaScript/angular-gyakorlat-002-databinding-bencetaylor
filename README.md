# Angular adatkötések gyakorlása

## Kezdő lépések
- Lépj be a klónozott mappába és állítsd be a projektet:
- `cd <repo-name>`
- `code . -r`
- Telepítsd a függőségeket:
- `npm i`
- Indítsd el az Angular Development Server -t:
- `npm start`

## Feladatok
- FONTOS! Adatkötésekkel dolgozz, semmilyen adatot ne fixálj a .html állományokban!
- Nyisd meg az `sample.JPG` fájlt.
- Az `src/app/app.component.html` fájlban úgy módosítsd a kódot, hogy a képen látható erdményt kapd. Az adatokat tilos fixen megadni és tilos a .ts fájlban 
dolgozni.
- Az `src/app/pricing-page/pricing-page.component.ts`, fájlban úgy módosítsd a 
kódot, hogy a képen látható erdményt kapd. A .html fájlban tilos dolgozni.

## Tesztelés
- Nyisd meg a terminált ebben a mappában és add ki ezt a parancsot:
- `npm test`
- Addig csináld, amíg az összes teszt nem lesz jó.

## Segítség
> Ha fixen meg akarsz jeleníteni egy értéket az interpolációt használd:  
> `{{ name }}` a name változó a kapcsolódó osztályból jön  
  
> Ha egy attribútum értékét szeretnéd módosítani a property bindig -ot használd:  
> `[title]="title"` a title változó a kapcsolódó osztályból jön  
  

