﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd1.Entities
{
    public partial class IdFavoritoscab
    {
        public int Codfavorito { get; set; }
        public Guid Guidgrupofavorito { get; set; }

        public virtual Favoritoscab CodfavoritoNavigation { get; set; }
    }
}