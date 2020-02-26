<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Advertisment extends Model
{
    /**
     * Get the post that owns the comment.
     */
    public function post()
    {
        return $this->belongsTo('App\User');
    }
}
