package com.stackroute.service;

import com.stackroute.domain.Repo;
import com.stackroute.repository.RepoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Primary
// mvn clean
// mvn spring-boot:run -Dspring.profiles.active=dummy
public class RepoServiceImpl implements RepoService{
    private RepoRepository repoRepository;

    @Autowired
    public RepoServiceImpl(RepoRepository  repoRepository) {
        System.out.println("Inside actual impl");
        this.repoRepository=repoRepository;
    }


    @Override
    public Repo saveRepo(Repo repo) throws Exception {
        if(repoRepository.existsById(repo.getId()))
            throw new Exception("Track id is already exists");
        Repo savedRepo= repoRepository.save(repo);
        if(savedRepo == null)
            throw new Exception("Track id is already exists");
        return savedRepo;
    }

    @Override
    public List<Repo> getAllRepo() {

        System.out.println("Inside actual impl");
        return repoRepository.findAll();
    }

    @Override
    public Repo deleteById(int id) throws Exception
    {
        if(!repoRepository.existsById(id))
            throw new Exception("Track not found");
        Repo repo= repoRepository.findById(id).get();
        repoRepository.delete(repoRepository.findById(id).get());
        return repo;
    }


}