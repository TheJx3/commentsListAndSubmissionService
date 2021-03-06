# commentsListAndSubmission

# StreamBoard commentsListandSubmission

> React component for StreamBoard that displays a comment list and submission form.

## Related Projects

  - https://github.com/StreamBoard98/suggestedTrackService
  - https://github.com/StreamBoard98/videoPlayerSkeletonService
  - https://github.com/StreamBoard98/waveForm


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [CRUD](#crud)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## CRUD

<pre>
GET:  songs/:id/comment

  song_id: number, unique,
  song_name: string,
  song_length: string,

  comment_id: number, primary
  comment_author: string,
  comment_avatar: string,
  comment_time: string,
  comment_date: string,
  comment_text: blobtext,
  song_id: number,
  foreign key(song_id);

  reply_id: number, unique
  reply_author: string,
  reply_avatar: string,
  reply_time: string,
  reply_date: string,
  reply_text: blobtext,
  comment_id: number,
  foreign key(comment_id);
  foreign key(song_id);


POST:   songs/:id/comment

  song_id: number,
  comment_author: string,
  comment_avatar: string,
  comment_time: string,
  comment_date: string,
  comment_text: blob_text


POST:   songs/:id/reply/:comment_id/

  song_id: number,
  comment_id: number,
  reply_author: string,
  reply_avatar: string,
  reply_time: string,
  reply_date: string,
  reply_text: blob_text


PUT:  songs/:id/comment/:comment_id/

  song_id: number,
  comment_id: number,
  comment_author: string,
  comment_avatar: string,
  comment_time: string,
  comment_date: string,
  comment_text: blob_text


PUT:  songs/:id/reply/:comment_id/:reply_id/

  song_id: number,
  comment_id: number,
  reply_id: number,
  reply_author: string,
  reply_avatar: string,
  reply_time: string,
  reply_date: string,
  reply_text: blob_text


DELETE: songs/:id/comment/:comment_id

  song_id: number,
  comment_id: number


DELETE: songs/:id/reply/:comment_id/:reply_id

  song_id: number,
  comment_id: number,
  reply_id: number

</pre>
