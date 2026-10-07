# Simulacija upozorenja na temperaturu

Inačica: demo-v04. Projekt provjerava ručno unesenu temperaturu. Nema fizičkog senzora, mjerenja vlage ni upravljanja ventilatorom.

## Pokretanje

1. Kopirajte cijelu mapu `tim-01-pametni-senzor` na vlastito računalo.
2. U pregledniku otvorite `src/index.html`. Instalacija dodataka ili poslužitelja nije potrebna.
3. Unesite `30` i kliknite **Provjeri temperaturu**. Očekujte upozorenje.
4. Unesite `28`. Očekujte dopušteno stanje. Prazan unos mora dati pogrešku.

Valjan raspon je od -40 do 85 °C uključivo. Upozorenje se pojavljuje za vrijednost strogo veću od 28 °C, najkasnije pet sekundi nakon klika.

## Namjerno pogrešna inačica za tutorial 08

Otvorite `variants/pogreska-prag/index.html`. Ona namjerno koristi prag 35 umjesto zahtijevanih 28. Unos 30 zato otkriva pogrešku. Ne koristite je kao ispravnu projektnu inačicu.

## Dokumentacija

- [Zahtjevi](docs/ZAHTJEVI.md)
- [Testovi](docs/TESTOVI.md)
- [Kanban kartice](docs/KANBAN.md)
- [Scenarij demonstracije](docs/SCENARIJ_DEMO.md)
- [Prijedlog teme](docs/PRIJEDLOG_TEME.md)
- [Prazni predložak prijedloga](docs/PRIJEDLOG_TEME_PRAZNO.md)
- [Izvori](docs/IZVORI.md)
- [AI evidencija](docs/AI_EVIDENCIJA.md)
- [Dnevnik rada](docs/DNEVNIK_RADA.md)
- [Dnevnik odluka](docs/DNEVNIK_ODLUKA.md)
- [Zapisnici](docs/ZAPISNICI.md)
- [Suradnja](docs/SURADNJA.md)

![Kontekst aplikacije](docs/slike/sustav.png)

U ovoj vježbi veličina simulacije služi učenju alata. Složenost godišnjeg projekta dogovara se zasebno.
