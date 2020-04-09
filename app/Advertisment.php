<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Laravelista\Comments\Commentable;


class Advertisment extends Model
{
    use Commentable;
    /**
     * Get the post that owns the comment.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
