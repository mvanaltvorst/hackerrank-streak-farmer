# hackerrank-streak-farmer
[Hackerrank](https://www.hackerrank.com/)'s credit system rewards users when they log in by giving away daily bonuses. This docker container will log in to Hackerrank daily so you can reap the rewards without the effort.

This works via a headless Chrome browser, so keep in mind that you will need ~300MB of free storage.

I do not know whether this complies with Hackerrank's terms of service, so use this at your own risk.

### Setup
1. Install [docker](https://www.docker.com/)
2. `git clone https://github.com/mvanaltvorst/hackerrank-streak-farmer/ && cd hackerrank-streak-farmer`
3. `echo -e "<YOUR USERNAME>" > hackerrank-username`
4. `echo -e "<YOUR PASSWORD>" > hackerrank-password`
5. `docker-compose build`

This previous step will take a while, depending on your internet connection and the performance of your computer.

6. `docker-compose up`
