using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace ComoSecondDalFramework.repository
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {

        void Add(TEntity entity);

        void Add(IEnumerable<TEntity> entities);
 
        TEntity GetById(params object[] keyValues);


        TEntity GetFirstOrDefault(
            Expression<Func<TEntity, bool>> predicate = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null,
            bool disableTracking = true
        );

        IQueryable<TEntity> GetAll();


        IEnumerable<TEntity> GetMuliple(
            Expression<Func<TEntity, bool>> predicate = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null,
            bool disableTracking = true
        );


        IQueryable<TEntity> FromSql(string sql, params object[] parameters);

        void Update(TEntity entity);


        void Update(IEnumerable<TEntity> entities);

        void Delete(object id);


        void Delete(TEntity entityToDelete);

        void Delete(IEnumerable<TEntity> entities);

        int Count(Expression<Func<TEntity, bool>> predicate = null);


        bool Exists(Expression<Func<TEntity, bool>> predicate);

    }

}
