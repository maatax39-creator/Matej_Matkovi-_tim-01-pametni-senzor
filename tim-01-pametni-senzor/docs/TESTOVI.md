# Plan i evidencija testova

Za svaki pokušaj zapišite datum, autora, inačicu, stvarnu poruku, vrijeme i dokaz. Stvarni rezultati namjerno nisu unaprijed popunjeni.

| ID | Inačica | Ulaz | Očekivano | Stvarno | Status | Dokaz |
|---|---|---|---|---|---|---|
| T01 | src/index.html | 30 | upozorenje, najkasnije 5 s | | | |
| T02 | src/index.html | 28 | dopušteno stanje | | | |
| T03 | src/index.html | prazan | pogreška | | | |
| T04 | src/index.html | tekst | pogreška | | | |
| T05 | src/index.html | -40 | dopušteno stanje | | | |
| T06 | src/index.html | 85 | upozorenje | | | |
| T07 | src/index.html | -41 ili 86 | pogreška | | | |
| T08 | variants/pogreska-prag/index.html | 30 | upozorenje prema Z02 | | | |

T08 treba otkriti namjernu pogrešku. Negativan test T03 prolazi ako aplikacija ispravno odbije unos. NEIZVEDENO/BLOKIRANO znači da test nije bilo moguće valjano izvesti.
