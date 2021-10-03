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
