using ComoSecondDalFramework.repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ComoSecondDalFramework.UnitOfWork
{

    public interface IUnitOfWork<TContext> : IDisposable where TContext : DbContext
    {

        TContext DbContext { get; }


        IGenericRepository<TEntity> GetRepository<TEntity>() where TEntity : class;

        int ExecuteSqlCommand(string sql, params object[] parameters);


        IQueryable<TEntity> FromSql<TEntity>(string sql, params object[] parameters) where TEntity : class;

        int Save();

        DbSet<T> Set<T>() where T : class;
    }
}
