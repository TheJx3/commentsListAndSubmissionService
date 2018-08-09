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

##CRUD
<pre>
GET:  song/:id/all_comments

  song_id: number,
  song_name: string,
  song_length: string,
  song_comments: jsonb

  jsonb = [
    {
      comments: [
        {
          comment_id: number,
          comment_author: string,
          comment_avatar: string,
          comment_time: string,
          comment_date: string,
          comment_text: blobtext,
          comment_replies: [
            {
              reply_id: number,
              reply_author: string,
              reply_avatar: string,
              reply_time: string,
              reply_date: string,
              reply_text: blobtext,
            },
          ],
        },
      ],
    },
  ];


POST:   song/:id/add_comment

  song_id: number,
  comment_author: string,
  comment_avatar: string,
  comment_time: string,
  comment_date: string,
  comment_text: blob_text


POST:   song/:id/add_reply/:comment_id/

  song_id: number,
  comment_id: number,
  reply_author: string,
  reply_avatar: string,
  reply_time: string,
  reply_date: string,
  reply_text: blob_text


PUT:  song/:id/edit_comment/:comment_id/

  song_id: number,
  comment_id: number,
  comment_author: string,
  comment_avatar: string,
  comment_time: string,
  comment_date: string,
  comment_text: blob_text


PUT:  song/:id/edit_reply/:comment_id/:reply_id/

  song_id: number,
  comment_id: number,
  reply_id: number,
  reply_author: string,
  reply_avatar: string,
  reply_time: string,
  reply_date: string,
  reply_text: blob_text


DELETE: song/:id/delete_comment/:comment_id

  song_id: number,
  comment_id: number


DELETE: song/:id/delete_reply/:comment_id/:reply_id

  song_id: number,
  comment_id: number,
  reply_id: number

</pre>
