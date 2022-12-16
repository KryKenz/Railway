FROM python:latest
ENV Railway "/venv"
RUN python -m venv $Railway
ENV PATH "$Railway/bin:$PATH"

# Railway os dependency Instalation
RUN apt-get update && apt-get install -y \
jq \
npm \
git \
curl \
wget \
nodejs \
ffmpeg \
bpm-tools \
opus-tools \
python3-pip \
python-is-python3
RUN git clone https://github.com/Krykenz/Railway
RUN rm -rf node_modules && npm install -g n && n install 16 && hash -r 

# Railway Runtime support Installation
RUN cd Railway
WORKDIR /Railway
RUN npm install -g spotify-dl spdl-core typescript forever --force && npm install --force
CMD node app.js