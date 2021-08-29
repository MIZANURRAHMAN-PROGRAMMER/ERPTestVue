<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //
    protected $fillable = [
        'user_id', 'catagory_id', 'title','content','thumnail','status'
    ];

    public function catagory(){
        return $this->belongsTo(Catagory::class)->select('id','name','slug');
    }

    public function user(){
        return $this->belongsTo(User::class)->select('id','name');
    }

}
