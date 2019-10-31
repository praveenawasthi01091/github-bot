package com.stackroute.repository;

import com.stackroute.domain.Repo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepoRepository extends MongoRepository<Repo, Integer> {
    /* the implementation will be provided to us in run time*/

}
