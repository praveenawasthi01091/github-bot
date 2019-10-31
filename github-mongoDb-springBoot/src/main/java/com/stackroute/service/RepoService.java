package com.stackroute.service;

import com.stackroute.domain.Repo;

import java.util.List;

public interface RepoService {
    public Repo saveRepo(Repo repo1) throws Exception;

    public List<Repo> getAllRepo();

    public  Repo deleteById(int id) throws Exception;


}
