package com.stackroute.controller;

import com.stackroute.domain.Repo;
import com.stackroute.service.RepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@PropertySources({
        //@PropertySource(value = "classpath:application-dev.properties"),
        @PropertySource(value = "classpath:application.properties")
        })

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/api/v1")
public class RepoController {
    //@Qualifier("userServiceDummyImpl")
    RepoService repoService;
    @Autowired
    public RepoController(RepoService repoService)
    {
        this.repoService=repoService;
    }

    /* create new resource -- post*/
    @PostMapping("/repo")
    public ResponseEntity<?> saveTrack(@RequestBody Repo repo) throws Exception {
       // trackService.saveTrack(track);
        try {
            return new ResponseEntity<Repo>(repoService.saveRepo(repo), HttpStatus.CREATED);
        }
        catch (Exception e)
        {
            System.out.println("inside Message method");
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    /*  Show all resources */
    @GetMapping("/repo")
    public ResponseEntity<?> getAllTrack() throws Exception{

            return new ResponseEntity<List<Repo>>(repoService.getAllRepo(), HttpStatus.OK);

    }
    /*delete resources*/
    @DeleteMapping("/repo/{id}")
    public ResponseEntity<?> deleteTrack(@PathVariable int id) throws Exception {
        System.out.println("method called");

        return new ResponseEntity<Repo>(repoService.deleteById(id), HttpStatus.OK);
    }

}
