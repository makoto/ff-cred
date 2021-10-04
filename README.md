# FF SourceCred 

This repository contains 

## How to setup

```
git clone https://github.com/ffdao/ff-cred.git
cd ff-cred
yarn
cp .env.example .env
```

Update `SOURCECRED_DISCORD_TOKEN` on `.env` (the example credential is not ours)

## How to calculate ff allocations(aka grains) 

1. Fetch the latest cred (takes 5~10 min)

first, create the new branch and run the following command.

```
yarn load
```

Once complete, commit the change.

2. Add new members

Open explorer page `http://localhost:6006/#/explorer` and show "All Time Activity", "Rows per page = 200", and sort by "Dred" desc order.

If there are any participants who have more than 2 cred with no FF, they are newly contributed members. List down all names, and add them at "Identities" tab, search the member, and tick the box. Highly recommend to go through the names with Carlos to exclude these accounts.

- FT/PT/CT/Advisors (eg: Carlos---Forefront, Joey-DeBruin, coopahtroopa) according to [these proposals](https://snapshot.org/#/ffdao.eth/proposal/QmejUFkTFzhWS3McVpYbfX3C4u1cBLSFqqfqysvXe3rrL5)
- bots (eg: seth, SourceCred, FF-BOT)

![](./sourcecred.png)

Once all added, click "Save Ledger to disk", and commit the change.


3. Run grains

```
yarn grain
```

4. Make PR and merge

Example https://github.com/ffdao/ff-cred/pull/11

5. Combine the 4 week worth of distribution into 1 month and give to Carlos

If you save the grain distribution data of each weeek into seperate file, you can run the following script to create the summary. Make sure to remove duplicate as `yarn grain` returns the same data twice for some reason.

```
-09-19.txtfront/ff-cred (sep-2021)$node script/summary.js data/distributions/2021-08-25.txt data/distributions/2021-09-05.txt data/distributions/2021-09-12.txt data/distributions/2021 
name, 2021-08-25.txt,2021-09-05.txt,2021-09-12.txt,2021-09-19.txt, summary
CPTNskeletor,43.177,84.847,49.168,48.919,226.111
jihad-eth,68.09,66.985,42.187,38.369,215.631
rafa---CABIN---CET,23.655,42.012,32.737,57.927,156.331
gianferrer-eth,18.973,23.782,23.764,18.921,85.44
ssp---psp,22.432,11.419,19.175,27.657,80.68299999999999
NatalieCrue,4.917,10.526,44.748,16.944,77.13499999999999
tian7-eth,18.438,11.617,12.929,21.016,64
Chase---chappy-eth,7.768,23.12,12.908,8.064,51.86
SpaceXponential,3.116,5.792,17.482,19.231,45.621
whatascoundrel,20.842,7.941,3.205,1.89,33.878
linda,20.586,4.622,2.816,2.067,30.090999999999998
Aureus,2.309,9.145,10.148,7.043,28.645
EliotC,10.166,6.838,6.539,4.717,28.259999999999998
Qhawe,9.683,1.58,4.414,11.556,27.232999999999997
milanshrestha-eth,6.355,4.002,4.912,11.821,27.089999999999996
Coach-Viking--Daniel-,9.938,6.244,5.151,3.513,24.846000000000004
agorismlabs,2.325,5.429,11.138,4.95,23.842
sirsu,7.556,5.975,6.391,2.914,22.836
bvajresh,10.176,4.424,3.758,3.082,21.44
gabygoldberg,15.268,3.137,1.816,1.17,21.391
kcaryths,4.434,6.289,6.47,3.815,21.008
Grendel,5.51,6.65,4.711,3.077,19.948
David--please-DYOR----,12.836,1.217,1.503,3.615,19.171
Austin-Robey--Ampled-,1.919,2.918,3.564,10.621,19.022
crankin,1.456,0.891,3.797,10.623,16.767
patey-eth,4.727,4.182,4.103,3.32,16.332
sriram,3.327,4.338,4.516,3.216,15.397000000000002
Dave----iodave,11.239,1.045,1.097,0.874,14.255
JDM,0.168,0.13,1.261,11.117,12.676
mel-being,2.313,4.491,3.216,2.571,12.591
kevinc,0.249,0.929,6.667,4.548,12.393
Vooka,3.672,3.134,3.184,2.347,12.337
Kristofer--Glasstempo-eth-,4.936,2.567,2.297,1.461,11.261000000000001
snorky,0.214,0.579,3.329,5.953,10.075
one1speed,0.398,0.865,6.148,2.052,9.463
idislikebrian,1.534,2.675,2.672,1.864,8.745000000000001
Sarmad---greydient,0.23,0.746,6.395,1.294,8.665
davidphelps,1.774,1.992,2.791,1.587,8.144
RantumBits,1.691,2.121,2.21,1.519,7.541
danconway-eth,1.186,1.99,2.137,2.219,7.532
ssp,1.289,2.138,2.223,1.557,7.206999999999999
Bau,1.325,2.119,2.202,1.542,7.188
aunyks-eth,1.316,2.241,2.132,1.407,7.096
jaydee,3.384,0.765,0.518,1.349,6.016
bgar723,1.762,1.576,1.562,1.088,5.988
Dame,0.974,1.629,1.695,1.187,5.485
kei,0.176,0.211,2.131,2.119,4.6370000000000005
lotusleaf,0.17,0.11,0.058,0.261,0.599
undefined,0,0,0,0,0
```

## FAQ

### What do we do if we don't run the query exactly at every 4 weeks?

Change the `maxSimultaneousDistributions` of `config/grain.json` and run `yarn grain`.
No need to commit the chang on the config unless you want to permanently change the report duration.